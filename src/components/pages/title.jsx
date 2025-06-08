import PageSubTitle from "./sub-title";
import { st_title } from "../../styles/index";

/**
 * PageTitle Component
 *
 * This component is responsible for rendering the main title of a page along with an optional subtitle.
 *
 * Props:
 * - title (string): The main title text to display.
 * - subtitle (string): A smaller subtitle text displayed below the main title (passed to PageSubTitle).
 *
 * Usage:
 * <PageTitle title="Dashboard" subtitle="Overview of metrics" />
 */

export default function PageTitle({ title, subtitle }) {
  return (
    <div className={st_title.container}>
      <h4 className={st_title.page}>{title}</h4>
      <PageSubTitle subtitle={subtitle} />
    </ div>
);
}