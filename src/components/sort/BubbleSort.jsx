import { useEffect, useState } from "react";
import { RECT_HEIGHT, RECT_WIDTH } from "../../constants/block_const";
import { swap } from "../../feature/swap";

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
      return array.map((value, index) => (
        <g key={index} id={`rect${index}`}>
          <rect
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            fill={paleColors[index]}
            x={coordinates[index].x}
            y={coordinates[index].y}
            stroke="#666"
          />
          <text
            x={coordinates[index].x + RECT_WIDTH / 2}
            y={coordinates[index].y + RECT_HEIGHT / 2}
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
  }, [coordinates]);

  return (
    <svg width="80vw" height="70vh">
      <text
        x={100}
        y={30}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
      >{`処理数 : ${index} / ${sortData.length - 1}`}</text>
      {svgComponent}
    </svg>
  );
};
