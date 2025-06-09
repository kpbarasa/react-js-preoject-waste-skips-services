import CardHeader from "./header";
import CardBody from "./body";
import { TbPlus, TbMinus } from "react-icons/tb";
import Tilt from 'react-parallax-tilt';

/**
 * Card Component
 * 
 * Represents a selectable card UI element that displays information about a "skip" (waste container).
 * Utilizes a hidden checkbox input to simulate radio-button behavior allowing selection/deselection.
 * Includes tilt animation on hover using react-parallax-tilt.
 * 
 * Props:
 * @param {object} skip - The data object representing the skip details.
 * @param {boolean} selected - Indicates whether this card is currently selected.
 * @param {function} onSelect - Callback function triggered when the card is selected/deselected.
 * 
 * Structure:
 * - A hidden checkbox input controls the selected state.
 * - The entire card is wrapped in a <label> for clickable accessibility.
 * - Tilt effect applied to the card container for subtle zoom on hover.
 * - CardHeader contains skip info, a media image, and action buttons.
 * - CardBody renders additional skip details.
 * - Buttons toggle visual active state based on `selected` prop.
 * 
 * Styling and Behavior:
 * - The card container has an "active" CSS class when selected.
 * - Buttons use consistent "card-btn" styling with active state variation.
 * 
 * Notes:
 * - The CardFooter is commented out but could be used for additional controls.
 */

export default function Card({ skip, selected, onSelect }) {
  return (
    <label htmlFor={`skip-${skip.id}`} className="cursor-pointer block">
      {/* Hidden checkbox to simulate radio with deselect */}
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="hidden"
      />

      <Tilt
        scale={1.05} 
        transitionSpeed={400}
        tiltMaxAngleX={0}
        tiltMaxAngleY={0}
        className="w-full"
      >

        {/* Card Content */}
        <div className={`${selected ? "card active" : "card"}`}>
          <CardHeader
            skip={skip}
            
            checked={selected}

            media={
              "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg"
            }
          >
            
            <button
              onClick={onSelect}
              className={selected ? "btn btn-md card-btn active" : "btn btn-md card-btn"}
            >
              {!selected ?   <TbPlus  /> : <TbMinus    />}
              <span className="font-bold text-sm">
                {!selected ?   `add` : `remove`}
              </span>
            </button>

          </CardHeader>

          <CardBody skip={skip} />

          {/* <CardFooter>
          </CardFooter> */}
        </div>

      </Tilt>


    </label>
  );
}
