import {
  TbTruckDelivery,
  TbTaxPound,
  TbArrowBigRight,
  TbArrowBigLeft,
} from "react-icons/tb";
import { GiWeight } from "react-icons/gi";
import CollapseComponent from "../../../components/collapse-btn";
import{useEffect, useState,useRef} from "react"

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}


/**
 * SkipSelectComponent
 *
 * Displays detailed pricing and info of the selected skip along with navigation buttons.
 * Layout and controls are responsive:
 * - Shows a collapsible detailed view and stacked buttons on mobile devices.
 * - Shows expanded pricing info with inline buttons on larger screens.
 *
 * Props:
 * @param {Object} selected - The currently selected skip object containing pricing and size info
 * @param {Function} next - Callback to navigate to the next skip option
 * @param {Function} prev - Callback to navigate to the previous skip option
 */

const SkipSelectComponent = ({ selected, next, prev }) => {

  const [animateOut, setAnimateOut] = useState(false);
  const prevSelected = usePrevious(selected);

  useEffect(() => {
    // Only animate out when going from truthy → falsy
    if (prevSelected && !selected) {
      setAnimateOut(true);
      // Remove animation class after it runs (so it can re-trigger next time)
      const timeout = setTimeout(() => setAnimateOut(false), 600); // match CSS animation duration
      return () => clearTimeout(timeout);
    }
  }, [selected]);

  return (
    <>
      <div class={`selected ${animateOut ? "fade-out-down" : ""}`}>
        <div className="max-w-7xl mx-auto">
          {/* SHOW ON MOBILE  */}
          <div class="lg:hidden">
            <div className="flex items-start justify-start mb-4">
              {selected && (
                <CollapseComponent>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-end items-center gap-3">
                      <div className="flex flex-col items-center">
                        <span className="card-price">
                          <div className="card-price-info">
                            <TbTaxPound />{" "}
                            <span> {`£ ${selected.price_before_vat}`}</span>
                          </div>
                          <small className="card-price-text">before vat</small>
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="card-price">
                          <div className="card-price-info">
                            <GiWeight />{" "}
                            <span> {`£ ${selected.per_tonne_cost}`}</span>
                          </div>
                          <small className="card-price-text">per tonne</small>
                        </span>
                      </div>

                      <div className="flex flex-col items-center">
                        <span className="card-price">
                          <div className="card-price-info">
                            <TbTruckDelivery />{" "}
                            <span> {`£ ${selected.transport_cost}`}</span>
                          </div>
                          <small className="card-price-text">transport</small>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-start items-start ml-3">
                      <p className="text-base text-gray-400 mb-1">
                        {selected.size} Yard Skip
                      </p>
                      <span className="text-base text-gray-400 mb-1 ml-2">
                        {selected.hire_period_days} day hire
                      </span>
                    </div>
                  </div>
                </CollapseComponent>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                className="btn btn-md btn-secondary"
                onClick={() => prev()}
              >
                <span>
                  <TbArrowBigLeft />
                </span>
                back
              </button>

              <button className="btn btn-md btn-primary" onClick={() => next()}>
                continue
                <span className="mt-1">
                  <TbArrowBigRight />
                </span>
              </button>
            </div>
          </div>

          {/* HIDE ON MOBILE  */}
          <div class="hidden lg:flex xl:flex justify-between items-center h-100">
            {selected && (
              <div className="flex justify-start items-end gap-2">
                <div className="flex justify-end items-center gap-3">
                  {selected.price_before_vat && (
                    <div className="flex flex-col items-center">
                      <span className="card-price">
                        <div className="card-price-info">
                          <TbTaxPound />{" "}
                          <span> {`£ ${selected.price_before_vat}`}</span>
                        </div>
                        <small className="card-price-text">before vat</small>
                      </span>
                    </div>
                  )}

                  {selected.per_tonne_cost && (
                    <div className="flex flex-col items-center">
                      <span className="card-price">
                        <div className="card-price-info">
                          <GiWeight />{" "}
                          <span> {`£ ${selected.per_tonne_cost}`}</span>
                        </div>
                        <small className="card-price-text">per tonne</small>
                      </span>
                    </div>
                  )}

                  {selected.transport_cost && (
                    <div className="flex flex-col items-center">
                      <span className="card-price">
                        <div className="card-price-info">
                          <TbTruckDelivery />{" "}
                          <span> {`£ ${selected.transport_cost}`}</span>
                        </div>
                        <small className="card-price-text">transport</small>
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-base text-gray-400 mb-1">
                  {selected.size} Yard Skip
                </p>
                <span className="text-base text-gray-400 mb-1 ml-2">
                  {selected.hire_period_days} day hire
                </span>
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                className="btn btn-md btn-secondary"
                onClick={() => prev()}
              >
                <span className="">
                  <TbArrowBigLeft />
                </span>
                prev
              </button>

              <button className="btn btn-md btn-primary" onClick={() => next()}>
                next
                <span className="">
                  <TbArrowBigRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkipSelectComponent;
