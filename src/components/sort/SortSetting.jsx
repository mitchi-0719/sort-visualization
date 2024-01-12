import { useEffect, useState } from "react";
import { SortBlock } from "../block/SortBlock";

export const SortSetting = ({ array, setArray, paleColors, coordinates }) => {
  const [blockComponents, setBlockComponents] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setBlockComponents(() => {
      return array.map((value, idx) => (
        <SortBlock
          key={idx}
          x={coordinates[idx].x}
          y={coordinates[idx].y}
          color={paleColors[idx]}
          isStriking={false}
          value={value}
          setArray={setArray}
          idx={idx}
          running={false}
          setTrigger={setTrigger}
        />
      ));
    });
  }, [coordinates, trigger]);

  return (
    <svg width="80vw" height="70vh">
      {blockComponents}
    </svg>
  );
};
