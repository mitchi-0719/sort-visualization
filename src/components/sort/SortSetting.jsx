import { useEffect, useState } from "react";
import { SortBlock } from "./SortBlock";

export const SortSetting = ({ array, setArray, paleColors, coordinates }) => {
  const [blockComponents, setBlockComponents] = useState(null);

  useEffect(() => {
    console.log(array)
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
        />
      ));
    });
  }, [array, coordinates]);

  return (
    <svg width="80vw" height="70vh">
      {blockComponents}
    </svg>
  );
};
