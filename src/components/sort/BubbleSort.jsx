import { useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";
import { SortBlock } from "../block/SortBlock";

export const BubbleSort = ({
  array,
  paleColors,
  index,
  coordinates,
  setCoordinates,
  sortData,
  coordinateIndex,
  setCoordinateIndex,
}) => {
  const [svgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    sortData.logs[index].type === "swap" &&
      swap(
        coordinates,
        setCoordinates,
        sortData.logs[index].index1,
        sortData.logs[index].index2,
        coordinateIndex,
        setCoordinateIndex
      );
  }, [index]);

  useEffect(() => {
    setSvgComponent(() => {
      return array.map((value, idx) => (
        <SortBlock
          key={idx}
          x={coordinates[idx].x}
          y={coordinates[idx].y}
          color={paleColors[idx]}
          isStriking={
            idx === coordinateIndex[sortData.logs[index].index1] ||
            idx === coordinateIndex[sortData.logs[index].index2]
          }
          value={value}
          running={true}
        />
      ));
    });
  }, [index, coordinates]);

  return (
    <svg width="80vw" height="70vh">
      <text
        x={SVG_TEXT_X}
        y={SVG_TEXT_Y}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
      >{`処理数 : ${index} / ${sortData.logs.length - 1}`}</text>
      <text
        x={SVG_TEXT_X}
        y={SVG_TEXT_Y + 30}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
      >
        {`status: ${sortData.logs[index].type}`}
      </text>
      {svgComponent}
    </svg>
  );
};
