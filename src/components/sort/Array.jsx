import { Box, Button } from "@mui/material";
import { generatePaleColors } from "../../feature/generatePaleColors";
import { useWindowSize } from "../../feature/useWindowSize";

export const Array = ({ array, setArray }) => {
  const paleColors = generatePaleColors(10);
  const [width, height] = useWindowSize();

  const areaWidth = width * 0.8;
  const areaHeight = height * 0.7;
  const rectWidth = 50;
  const rectHeight = 50;
  const verticalSpacing = 20;
  const topMargin = areaHeight / 2 - rectHeight / 2;
  const leftMargin =
    (areaWidth - array.length * (rectWidth + verticalSpacing)) / 2;

  return (
    <Box height="90%">
      <svg width="80vw" height="70vh">
        {array.map((value, index) => (
          <g key={index} id={`rect${index}`}>
            <rect
              width={rectWidth}
              height={rectHeight}
              fill={paleColors[index]}
              x={leftMargin + index * (rectWidth + verticalSpacing)}
              y={topMargin - rectHeight / 2}
              stroke="#666"
            />
            <text
              x={
                leftMargin +
                index * (rectWidth + verticalSpacing) +
                rectWidth / 2
              }
              y={topMargin}
              text-anchor="middle"
              alignment-baseline="middle"
              font-size="20"
              fill="#333"
            >
              {value}
            </text>
          </g>
        ))}
      </svg>
    </Box>
  );
};
