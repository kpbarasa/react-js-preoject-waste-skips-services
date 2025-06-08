import { useContext, useState } from "react";
import { SkipsContext } from "../../hooks/context/context_skips_provider.jsx";
import PageComponent from "../../components/pages/index";
import NavMenu from "../../components/nav-menu.jsx";
import SkipSelectorPage from "./skips/index.jsx"
import { TbMapPin } from "react-icons/tb";

/**
 * ServiceSelectionPage
 *
 * Main page component for skip selection workflow in a waste management app.
 * 
 * Features:
 * - Manages navigation steps of the waste management selection process.
 * - Consumes skips data from SkipsContext and displays a loading state while fetching.
 * - Renders navigation menu showing progress of current step.
 * - Displays SkipSelectorPage for selecting skips once data is loaded.
 */

const ServiceSelectionPage = () => {

  // --------------------------------------------------------------------------------------------------
  // handles waste management selection steps navigation 
  // --------------------------------------------------------------------------------------------------
  const [steps] = useState([
            { title: "post code", icon: <TbMapPin />, no:0 },
            { title: "waste type", icon: <TbMapPin />, no:1},
            { title: "select skip", icon: <TbMapPin />, no:2},
            { title: "Permit check", icon: <TbMapPin />, no:3 },
            { title: "choose date", icon: <TbMapPin />, no:4 },
            { title: "payment", icon: <TbMapPin />, no:5 },
          ]);
  const [step, setStep] = useState(2);

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);
  
  // --------------------------------------------------------------------------------------------------
  // handles selected skips 
  // --------------------------------------------------------------------------------------------------
  const { skips, loading } = useContext(SkipsContext);


  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <>
       {/* Steps progress  */}
      <NavMenu steps={steps} currentStep={step} />
        
        <PageComponent>

        {skips && 
          <SkipSelectorPage
          skips={skips}
          selected={step} prev={() => prev()} next={() => next()}
        />}
        
        </PageComponent>

    </>
  );
};

export default ServiceSelectionPage;