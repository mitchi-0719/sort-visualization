import { useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";
import { SortBlock } from "../block/SortBlock";
import {
  SELECTION_MAX_TEXT_Y,
  SELECTION_STRIKING_RECT_COLOR,
  STRIKING_RECT_COLOR,
} from "../../styles/style";
import { RECT_WIDTH } from "../../constants/blockConst";

export const SelectionSort = ({
  array,
  paleColors,
  index,
  coordinates,
  setCoordinates,
  sortData,
  coordinateIndex,
  setCoordinateIndex,
  order,
}) => {
  const [svgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    sortData[index].type === "swap" &&
      swap(
        coordinates,
        setCoordinates,
        sortData[index].index1,
        sortData[index].hold,
        coordinateIndex,
        setCoordinateIndex
      );
  }, [index]);

  useEffect(() => {
    setSvgComponent(() => {
      return array.map((value, idx) => (
        <>
          {idx === coordinateIndex[sortData[index].hold] && (
            <text
              x={coordinates[idx].x + RECT_WIDTH / 2}
              y={SELECTION_MAX_TEXT_Y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="20"
              fill="#333"
            >
              {order === "asc" ? "min" : "max"}
            </text>
          )}
          <SortBlock
            key={idx}
            x={coordinates[idx].x}
            y={coordinates[idx].y}
            color={paleColors[idx]}
            isStriking={
              idx === coordinateIndex[sortData[index].index1] ||
              idx === coordinateIndex[sortData[index].hold]
            }
            strikingColor={
              idx === coordinateIndex[sortData[index].hold]
                ? SELECTION_STRIKING_RECT_COLOR
                : STRIKING_RECT_COLOR
            }
            value={value}
            running={true}
          />
        </>
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
