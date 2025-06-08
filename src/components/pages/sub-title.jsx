/**
 * PageSubTitle Component
 *
 * This component displays a subtitle typically used under a page's main title.
 * It accepts a single prop to define the subtitle content and applies consistent styling.
 *
 * Props:
 * - subtitle (string): The text content of the subtitle.
 *
 * Usage:
 * <PageSubTitle subtitle="This is a subtitle." />
 */

import { st_title } from "../../styles/index";

export default function PageSubTitle({ subtitle }) {
  return <div className={st_title.page_sub}>{subtitle}</div>;
}