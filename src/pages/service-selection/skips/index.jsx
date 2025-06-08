import { useEffect, useState } from "react";
import Card from "../../../components/cards/index";
import SkipSelectComponent from "./skips-select";

/**
 * SkipSelectorPage
 * 
 * Displays a list of skip cards and allows the user to select one.
 * When a skip is selected, its detailed view is shown via SkipSelectComponent.
 * 
 * Props:
 * @param {Array} skips - Array of skip objects to display
 * @param {Function} prev - Callback function to navigate to previous skip
 * @param {Function} next - Callback function to navigate to next skip
 * 
 * State:
 * - selectedId: The ID of the currently selected skip
 * - selected: The full skip object currently selected
 */
export default function SkipSelectorPage({ skips, prev, next }) {

  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
    setSelected(skips.find((skip) => skip.id === id));
  };

  useEffect(() => {
    if(selectedId === null)(
      setSelected(null)
    )
  }, [selectedId])
  

  return (
    <>
        {skips && skips.map((skip) => (
          <Card
            key={skip.id}
            skip={skip}
            selected={selectedId === skip.id}
            onSelect={() => handleSelect(skip.id)}
          />
        ))}

      {/* Render the selected skip details if one is selected */}
      {selected && 
        <SkipSelectComponent selected={selected} prev={prev} next={next} />
      }
    </>
  );
}