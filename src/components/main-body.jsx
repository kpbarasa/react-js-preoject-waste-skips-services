/**
 * MainBody Component
 * 
 * A layout wrapper used to contain the main content of the page.
 * Provides consistent padding, max-width constraint, and background styling.
 * 
 * Props:
 * - children: React nodes passed into the layout for rendering within the main section.
 * 
 * Tailwind classes used:
 * - min-h-screen: ensures the container fills the full viewport height
 * - bg-background_primary: background color (from Tailwind theme or custom config)
 * - text-light: text color (commonly light gray or white, depending on theme)
 * - max-w-7xl: constrains content width (approx. 80rem)
 * - mx-auto: centers content horizontally
 * - px-4 py-8: applies horizontal and vertical padding
 * - relative: used for positioning inner absolute elements if needed
 */

export default function MainBody({ children }) {
  return(
    <div className="min-h-screen bg-background_primary text-light">
      <main className="relative max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}