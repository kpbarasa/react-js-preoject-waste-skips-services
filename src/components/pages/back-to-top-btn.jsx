import { useEffect, useState } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import {st_title} from "../../styles/index"

/**
 * BackToTopButton Component
 *
 * This component renders a floating "Back to Top" button that becomes visible when the user scrolls
 * past 60% of the viewport height (60vh). Clicking the button smoothly scrolls the page to the top.
 *
 * Uses:
 * - React's `useEffect` and `useState` to manage visibility based on scroll position.
 * - `react-icons/TbArrowBigUpLines` for the button icon.
 *
 * Functionality:
 * - On scroll, it checks if the scroll position exceeds 60vh.
 * - Shows or hides the button accordingly using conditional CSS classes.
 * - On click, it smoothly scrolls the window to the top.
 *
 * Accessibility:
 * - Includes `aria-label` for screen readers.
 *
 * Styling:
 * - `fixed` position at bottom-right of the screen.
 * - `btn`, `btn-primary`, `rounded-full`, etc., are utility classes (likely from TailwindCSS or a design system).
 */

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.6;
      setShow(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`${st_title.back_to_top_btn}  ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <TbArrowBigUpLines />
    </button>
  );
}
