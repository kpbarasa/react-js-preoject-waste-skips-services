/**
 * Media Component
 * 
 * This component renders media content based on the given `type`.
 * It supports displaying either an image or a video.
 * 
 * Props:
 * @param {string} type - The media type, expected values: "image" or "video".
 * @param {string} src - The source URL of the media to display.
 * 
 * Behavior:
 * - If `type` is "image", renders an <img> element with specified styling.
 * - Otherwise, assumes `type` is "video" and renders a <video> element with controls.
 * 
 * Styling:
 * - Image and video have a fixed height of 12rem (h-48) and full width.
 * - Image uses `object-cover` to maintain aspect ratio and is rounded on top corners.
 */

export default function Media({ type, src }) {
  return type === "image" ? (
    <img src={src} alt="media" className="w-full h-48 object-cover rounded-t-lg-md" />
  ) : (
    <video controls className="w-full h-48">
      <source src={src} type="video/mp4" />
    </video>
  );
}