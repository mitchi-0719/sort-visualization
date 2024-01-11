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
}) => {
  const [svgComponent, setSvgComponent] = useState(null);
  const [coordinateIndex, setCoordinateIndex] = useState(
    Array.from({ length: array.length }, (_, index) => index)
  );

  useEffect(() => {
    sortData[index].type === "swap" &&
      swap(
        coordinates,
        setCoordinates,
        sortData[index].index1,
        sortData[index].index2,
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
            idx === coordinateIndex[sortData[index].index1] ||
            idx === coordinateIndex[sortData[index].index2]
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
      >{`処理数 : ${index} / ${sortData.length - 1}`}</text>
      <text
        x={SVG_TEXT_X}
        y={SVG_TEXT_Y + 30}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
      >
        {`status: ${sortData[index].type}`}
      </text>
      {svgComponent}
    </svg>
  );
};
