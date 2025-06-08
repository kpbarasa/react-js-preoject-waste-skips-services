/**
 * CardFooter Component
 * 
 * A simple container component for the footer section of a card.
 * It is designed to wrap any child elements passed to it, typically
 * buttons, links, or additional info related to the card.
 * 
 * Props:
 * @param {React.ReactNode} children - Elements or components to be rendered inside the footer.
 * 
 * Usage:
 * Wrap footer content inside <CardFooter> ... </CardFooter> to apply consistent styling.
 */

export default function CardFooter(props) {
  return (
    <div className="card-footer">
      {props.children}
    </div>
  );
}