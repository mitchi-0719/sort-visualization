import React, { useContext, useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SVG_TEXT_X, SVG_TEXT_Y } from "../../constants/svgTextConst";
import { SortBlock } from "../block/SortBlock";
import {
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  SELECTION_MAX_TEXT_Y,
  SELECTION_STRIKING_RECT_COLOR,
  STRIKING_RECT_COLOR,
} from "../../styles/style";
import { RECT_WIDTH } from "../../constants/blockConst";
import { darkModeContext } from "../../context/DarkModeContext";
import { useWindowSize } from "../../feature/useWindowSize";
import { useIsWideSize } from "../../feature/useIsWideSize";

export const SelectionSort = ({
  array,
  setArray,
  paleColors,
  sortIndex,
  coordinates,
  setCoordinates,
  sortData,
  coordinateIndex,
  setCoordinateIndex,
  order,
}) => {
  const [svgComponent, setSvgComponent] = useState(null);
  const [svgText, setSvgText] = useState(null);
  const { isDark } = useContext(darkModeContext);
  const windowSIze = useWindowSize();
  const isWideSize = useIsWideSize();

  useEffect(() => {
    sortData[sortIndex].type === "swap" &&
      swap(
        coordinates,
        setCoordinates,
        sortData[sortIndex].index1,
        sortData[sortIndex].hold,
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
        <React.Fragment key={idx}>
          {idx === coordinateIndex[sortData[sortIndex].hold] && (
            <text
              x={coordinates[idx].x + RECT_WIDTH / 2}
              y={SELECTION_MAX_TEXT_Y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="20"
              fill={isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR}
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
              idx === coordinateIndex[sortData[sortIndex].index1] ||
              idx === coordinateIndex[sortData[sortIndex].hold]
            }
            strikingColor={
              idx === coordinateIndex[sortData[sortIndex].hold]
                ? SELECTION_STRIKING_RECT_COLOR
                : STRIKING_RECT_COLOR
            }
            value={value}
            running={sortIndex !== 0}
            setArray={setArray}
            idx={idx}
          />
        </React.Fragment>
      ));
    });
  }, [isDark, sortIndex, coordinates]);

  return (
    <svg
      width={windowSIze.height * (isWideSize ? 0.8 : 1)}
      height={windowSIze.height * (isWideSize ? 0.7 : 0.55)}
    >
      {svgText}
      {svgComponent}
    </svg>
  );
};
