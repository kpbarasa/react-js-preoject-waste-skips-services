import { useState } from "react";
/**
 * CollapseComponent
 * 
 * A reusable React component that toggles visibility of its children
 * with a smooth expand/collapse animation.
 * 
 * Functionality:
 * - Uses React state (`isOpen`) to control the open/collapsed state
 * - Toggles on button click
 * - Transitions handled with Tailwind's `transition-all`, `duration-300`, and `ease-in-out`
 * 
 * Props:
 * - children: ReactNode — the content to show/hide inside the collapsible container
 */

export default function CollapseComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-primary btn-md px-4 py-2 rounded-md"
      >
        {isOpen ? "Hide" : "Show"}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 w-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mb-1 mt-4">
           {props.children} 
        </div>
      </div>
    </div>
  );
}
