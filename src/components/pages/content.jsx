/**
 * PageContent Component
 *
 * This component serves as a layout container for rendering the main body content of a page.
 * It uses a responsive CSS grid to arrange child elements in 1, 2, or 3 columns depending on the screen size.
 *
 * Props:
 * - children (ReactNode): The content to be displayed inside the grid layout.
 *
 * Tailwind Utility Breakdown:
 * - max-w-7xl: Sets the maximum width of the container.
 * - mx-auto: Centers the container horizontally.
 * - px-4 py-4 pb-32: Adds padding on x/y axes and extra bottom padding.
 * - grid grid-cols-1 ...: Responsive column layout.
 * - gap-4 md:gap-6: Spacing between grid items, increasing on medium screens.
 *
 * Usage:
 * <PageContent>
 *   <Card />
 *   <Card />
 * </PageContent>
 */

export default function PageContent(props) {
  return <div className="max-w-7xl mx-auto px-4 py-4 pb-32 grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20  ">{props.children}</div>;
}