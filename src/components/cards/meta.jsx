import { TbMapPin  } from "react-icons/tb";
import { PiCheckFatFill } from "react-icons/pi";

/**
 * Meta Component
 *
 * This component displays metadata related to a "skip" item, including:
 * - A checkmark icon if the skip is marked as checked.
 * - The skip's location information, showing postcode and area with a map pin icon.
 *
 * Props:
 * @param {Object} skip - The skip object containing location data.
 * @param {string} skip.postcode - The postcode of the skip location.
 * @param {string} skip.area - The area name of the skip location.
 * @param {boolean} checked - Flag indicating if this skip is selected/checked.
 *
 * Behavior:
 * - If `checked` is true, shows a checkmark icon with an active style.
 * - Always shows the location with a map pin icon and fallback for missing data.
 *
 * Note:
 * - Uses `TbMapPin` and `PiCheckFatFill` icons from react-icons.
 */

export default function Meta({skip, checked}) {
  return (
    <>
    {checked && 
      <div className={checked ? "card-checked active" : "card-checked"}> 
        <PiCheckFatFill />
      </div>
    }
    <div className="card-location"> 
      <TbMapPin /> {skip.postcode ?? skip.postcode}  {skip.area ?? "|" + skip.area}
    </div>
    </>
    );
}