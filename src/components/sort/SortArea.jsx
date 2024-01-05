import { Box, Button } from "@mui/material";
import { generatePaleColors } from "../../feature/generatePaleColors";
import { useWindowSize } from "../../feature/useWindowSize";
import { useEffect, useState } from "react";

export const SortArea = ({ array, setArray }) => {
  const paleColors = generatePaleColors(array.length);
  const [width, height] = useWindowSize();
  const [coordinates, setCoordinates] = useState(
    Array(array.length).fill({ x: 0, y: 0 })
  );
  const rectWidth = 50;
  const rectHeight = 50;

  const getCoordinates = (length) => {
    const areaWidth = width * 0.8;
    const areaHeight = height * 0.7;
    const verticalSpacing = 20;
    const topMargin = areaHeight / 2 - rectHeight / 2;
    const leftMargin =
      (areaWidth - array.length * (rectWidth + verticalSpacing)) / 2;

    const coordinatesArray = [];
    let X, Y;

    for (let i = 0; i < length; i++) {
      X = leftMargin + i * (rectWidth + verticalSpacing);
      Y = topMargin - rectHeight / 2;
      coordinatesArray.push({ x: X, y: Y });
    }

    return coordinatesArray;
  };

  useEffect(() => {
    setCoordinates(getCoordinates(array.length));
  }, [width, height, array.length, rectWidth, rectHeight]);

  return (
    <Box height="90%">
      {width !== 0 && height !== 0 && (
        <svg width="80vw" height="70vh">
          {array.map((value, index) => (
            <g key={index} id={`rect${index}`}>
              <rect
                width={rectWidth}
                height={rectHeight}
                fill={paleColors[index]}
                x={coordinates[index].x}
                y={coordinates[index].y}
                stroke="#666"
              />
              <text
                x={coordinates[index].x + rectWidth / 2}
                y={coordinates[index].y + rectHeight / 2}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="20"
                fill="#333"
              >
                {value}
              </text>
            </g>
          ))}
        </svg>
      )}
    </Box>
  );
};
