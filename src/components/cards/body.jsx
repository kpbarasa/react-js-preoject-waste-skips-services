import Alert from "./alert";
import { TbTruckDelivery, TbTaxPound } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";

/**
 * CardBody Component
 * 
 * Displays detailed information about a skip, including its size, hire period,
 * pricing details (before VAT, per tonne cost, transport cost), and an alert indicator.
 * 
 * Props:
 * @param {Object} skip - The skip object containing details to display.
 * @param {number} skip.size - Size of the skip in yards.
 * @param {number} skip.hire_period_days - Duration of hire in days.
 * @param {number} [skip.price_before_vat] - Price before VAT (optional).
 * @param {number} [skip.per_tonne_cost] - Cost per tonne (optional).
 * @param {number} [skip.transport_cost] - Transport cost (optional).
 * @param {boolean} skip.allowed_on_road - Indicates if the skip is allowed on the road (for Alert).
 * 
 * Usage:
 * Render this component within a card to show detailed skip info.
 */

export default function CardBody({skip}) {
  return (
    <div className="card-body">

      <h5 className="h5 card-title">{`${skip.size} Yard Skip`}</h5>

      <p className="card-description">{`${skip.hire_period_days} day hire period`}</p>

      <div className="flex justify-evenly gap-2 items-center mx-5 mt-5">

        {skip.price_before_vat && 
          <div className="flex flex-col items-center gap-0">
            <span className="card-price">
              <div className="card-price-info">
              <TbTaxPound /> <span> {`£ ${skip.price_before_vat}`}</span>
              </div>
              <small className="card-price-text">before vat</small>
            </span>
          </div>
        }

        {skip.per_tonne_cost && 
          <div className="flex flex-col items-center">
            <span className="card-price">
              <div className="card-price-info">
              <GiWeight /> <span> {`£ ${skip.per_tonne_cost}`}</span>
              </div>
              <small className="card-price-text">per tonne</small>
            </span>
          </div>
        }
        
        {skip.transport_cost && 
          <div className="flex flex-col items-center">
            <span className="card-price">
              <div className="card-price-info">
              <TbTruckDelivery  /> <span> {`£ ${skip.transport_cost}`}</span>
              </div>
              <small className="card-price-text">transport</small>
            </span>
          </div>
        }

      </div>
      
      <div className="flex justify-center items-center mt-2">
        <Alert type={skip.allowed_on_road} />
      </div>

    </div>
  );
}