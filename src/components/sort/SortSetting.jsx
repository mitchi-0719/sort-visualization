import { Box } from "@mui/material";
import { RECT_HEIGHT, RECT_WIDTH } from "../../constants/block";

export const SortSetting = ({
  array,
  paleColors,
  coordinates,
}) => {
  return (
    <Box height="90%">
        <svg width="80vw" height="70vh">
          {array.map((value, index) => (
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
          ))}
        </svg>
    </Box>
  );
};
