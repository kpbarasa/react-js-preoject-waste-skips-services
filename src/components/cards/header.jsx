import Meta from "./meta";
import Media from "./media";

/**
 * CardHeader Component
 * 
 * Displays the header section of a card representing a skip.
 * It includes meta information, media content (image or video), 
 * and an overlay section for additional interactive elements (buttons, icons, etc.).
 * 
 * Props:
 * @param {object} skip - The skip data object containing location and other meta details.
 * @param {string} media - URL string for the media to display (typically an image).
 * @param {boolean} checked - Indicates if the card is currently selected/checked.
 * @param {React.ReactNode} children - Additional JSX elements to render inside the overlay (e.g., buttons).
 * 
 * Structure:
 * - Meta component shows location info and selection status.
 * - Media component renders an image or video with consistent styling.
 * - An overlay div positioned on top of the media to hold interactive children.
 */

export default function CardHeader(props) {

  const {skip, media, checked, children} = props;

  return (
    <div className="card-header">
      <Meta skip={skip} checked={checked} />
      <Media className="w-full h-36 md:h-48 object-cover rounded-sm mb-4" type="image" src={media} />
      <div className="card-header-overlay">
        {children}
      </div>
    </div>
  );
}