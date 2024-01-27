import { useContext, useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";
import { SortBlock } from "../block/SortBlock";
import {
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  STRIKING_RECT_COLOR,
} from "../../styles/style";
import { darkModeContext } from "../../context/DarkModeContext";

export const BubbleSort = ({
  array,
  setArray,
  paleColors,
  sortIndex,
  coordinates,
  setCoordinates,
  sortData,
  coordinateIndex,
  setCoordinateIndex,
}) => {
  const [svgComponent, setSvgComponent] = useState(null);
  const [svgText, setSvgText] = useState(null);
  const { isDark } = useContext(darkModeContext);

  useEffect(() => {
    sortData[sortIndex].type === "swap" &&
      swap(
        coordinates,
        setCoordinates,
        sortData[sortIndex].index1,
        sortData[sortIndex].index2,
        coordinateIndex,
        setCoordinateIndex
      );
  }, [sortIndex]);

  useEffect(() => {
    setSvgText(() => {
      return (
        <>
          <text
            x={SVG_TEXT_X}
            y={SVG_TEXT_Y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="20"
            fill={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
          >{`処理数 : ${sortIndex} / ${sortData.length - 1}`}</text>
          <text
            x={SVG_TEXT_X}
            y={SVG_TEXT_Y + 30}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="20"
            fill={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
          >
            {`status: ${sortData[sortIndex].type}`}
          </text>
        </>
      );
    });
  }, [isDark, sortIndex]);

  useEffect(() => {
    setSvgComponent(() => {
      return array.map((value, idx) => (
        <SortBlock
          key={idx}
          x={coordinates[idx].x}
          y={coordinates[idx].y}
          color={paleColors[idx]}
          isStriking={
            idx === coordinateIndex[sortData[sortIndex].index1] ||
            idx === coordinateIndex[sortData[sortIndex].index2]
          }
          strikingColor={STRIKING_RECT_COLOR}
          value={value}
          running={sortIndex !== 0}
          setArray={setArray}
          idx={idx}
        />
      ));
    });
  }, [sortIndex, coordinates]);

  return (
    <svg width="80vw" height="70vh" style={{background: "#ffd900"}}>
      {svgText}
      {svgComponent}
    </svg>
  );
};
