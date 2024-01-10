import { useEffect, useState } from "react";
import {
  RECT_HEIGHT,
  RECT_WIDTH,
  STRIKING_RECT_WIDTH,
} from "../../constants/blockConst";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";

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
    console.log(sortData, index);
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
        <g key={idx} id={`rect${idx}`}>
          {(idx === coordinateIndex[sortData[index].index1] ||
            idx === coordinateIndex[sortData[index].index2]) && (
            <rect
              width={STRIKING_RECT_WIDTH}
              height={STRIKING_RECT_WIDTH}
              fill="red"
              x={coordinates[idx].x - 7}
              y={coordinates[idx].y - 7}
            />
          )}
          <rect
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            fill={paleColors[idx]}
            x={coordinates[idx].x}
            y={coordinates[idx].y}
            stroke="#666"
            style={{
              transition: "transform 0.5s",
            }}
          />
          <text
            x={coordinates[idx].x + RECT_WIDTH / 2}
            y={coordinates[idx].y + RECT_HEIGHT / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="20"
            fill="#333"
          >
            {value}
          </text>
        </g>
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
