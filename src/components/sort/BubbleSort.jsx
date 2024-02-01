import { useEffect, useState } from "react";
import { swap } from "../../feature/swap";
import { SortBlock } from "../block/SortBlock";
import {
  STRIKING_RECT_COLOR,
} from "../../styles/style";
import { useWindowSize } from "../../feature/useWindowSize";
import { useIsWideSize } from "../../feature/useIsWideSize";

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
  const windowSIze = useWindowSize();
  const isWideSize = useIsWideSize();

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
  }, [sortIndex, coordinates, windowSIze]);

  return (
    <svg
      width={windowSIze.width * (isWideSize ? 0.8 : 1)}
      height={windowSIze.height * (isWideSize ? 0.7 : 0.55)}
    >
      {svgComponent}
    </svg>
  );
};
