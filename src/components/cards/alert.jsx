import { TbAlertTriangle } from "react-icons/tb";

/**
 * Alert Component
 * 
 * Displays a warning alert message with an icon based on the `type` prop.
 * Currently supports a single alert type indicating the skip is "not allowed on the road".
 * 
 * Props:
 * @param {boolean} type - Alert condition flag. When true, displays the alert.
 * 
 * Behavior:
 * - If `type` is falsy, nothing is rendered (returns null).
 * - If `type` is true, renders a warning alert with an icon and message.
 * 
 * Usage:
 * <Alert type={skip.allowed_on_road} />
 */

export default function Alert({ type }) {
  const labelMap = {
    true: "not allowed on the road",
  };
  
  const iconMap = {
    true: <TbAlertTriangle />,
  };

  if(!type) return null

  return <div className=" space-y-2">
    <div className="bg-dark backdrop-blur-sm px-2 py-1.5 rounded-lg flex items-center gap-2">
      <span className="flex justify-start items-center gap-1 text-xs font-semibold text-warning capitalize">
        {iconMap[type]} {labelMap[type]}
      </span>
    </div>
  </div>;
}