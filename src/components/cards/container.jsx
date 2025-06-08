/**
 * CardContainer Component
 * 
 * A layout component that arranges its child elements in a responsive grid.
 * 
 * On small screens, it displays a single column, and on medium (md) screens and above,
 * it displays three columns with a gap between grid items.
 * 
 * Props:
 * @param {React.ReactNode} children - The card components or any other elements to be placed inside the grid.
 * 
 * Usage:
 * Wrap multiple card elements inside <CardContainer> to apply consistent grid layout.
 */

export default function CardContainer({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>;
}