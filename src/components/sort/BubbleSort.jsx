import { useContext, useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";
import { SortBlock } from "../block/SortBlock";
import { DARK_TEXT_COLOR, LIGHT_TEXT_COLOR } from "../../styles/style";
import { Context } from "../../context/context";

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
  const { isDark } = useContext(Context);
  const [svgComponent, setSvgComponent] = useState(null);

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
        fill={isDark ? DARK_TEXT_COLOR: LIGHT_TEXT_COLOR}
      >{`処理数 : ${index} / ${sortData.length - 1}`}</text>
      <text
        x={SVG_TEXT_X}
        y={SVG_TEXT_Y + 30}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill={isDark ? DARK_TEXT_COLOR: LIGHT_TEXT_COLOR}
      >
        {`status: ${sortData[index].type}`}
      </text>
      {svgComponent}
    </svg>
  );
};
