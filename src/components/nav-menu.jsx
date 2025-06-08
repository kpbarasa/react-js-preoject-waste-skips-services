import { useEffect, useState } from "react";

/**
 * NavMenu Component
 * -----------------
 * A step-by-step wizard navigation bar.
 * It becomes fixed at the top of the viewport once the user scrolls past 10vh.
 *
 * Props:
 * - currentStep: number - current active step
 * - steps: array - list of step objects with `no`, `icon`, `title`
 */

export default function NavMenu({ currentStep, steps }) {
  const [animationClass, setAnimationClass] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.15;
      setIsFixed((prev) => {
        if (!prev && window.scrollY > threshold) {
          setAnimationClass("fade-in-down");
          return true;
        }
        if (prev && window.scrollY <= threshold) {
          setAnimationClass("fade-in-up");
          return false;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => setAnimationClass(""), 800); // 800ms = animation duration
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  return (
    <div
      className={`w-full h-auto mb-10 transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0 z-50" : "relative"
      } ${animationClass}`}
    >
      <nav className="wizard-nav-container">
        <ul className="wizard-nav">
          {steps.map((step, index) => (
            <li
              className={
                step.no === currentStep
                  ? "nav-item-container active"
                  : "nav-item-container"
              }
            >
              <div
                className={
                  step.no <= currentStep ? "nav-item active" : "nav-item"
                }
              >
                <span className="nav-icon"> {step.icon} </span>
                <span className="nav-text"> {step.title} </span>
                <span className="nav-num"> {step.no} </span>
              </div>
              {index !== 5 ? <div className="nav-divider"></div> : null}
            </li>
          ))}
        </ul>
        {/* CURRENT STEP  */}
        <p className="capitalize font-semibold sx:flex md:flex lg:flex xl:hidden">
          step {currentStep}: &nbsp;
          <span className="text-secondary">{steps[currentStep].title}</span>
        </p>
      </nav>
    </div>
  );
}
