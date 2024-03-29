import { useContext, useState } from "react";
import {
  RECT_HEIGHT,
  RECT_WIDTH,
  STRIKING_RECT_HEIGHT,
  STRIKING_RECT_WIDTH,
} from "../../constants/blockConst";
import { ChangeDialog } from "./ChangeDialog";
import {
  DARK_BLOCK_BORDER_COLOR,
  LIGHT_BLOCK_BORDER_COLOR,
} from "../../styles/style";
import { darkModeContext } from "../../context/DarkModeContext";

export const SortBlock = ({
  x,
  y,
  color,
  isStriking,
  strikingColor,
  value,
  setArray,
  idx,
  running,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isDark } = useContext(darkModeContext);

  const handleOpen = () => {
    running || setDialogOpen(true);
  };

  return (
    <g>
      {isStriking && (
        <rect
          width={STRIKING_RECT_WIDTH}
          height={STRIKING_RECT_HEIGHT}
          fill={strikingColor}
          x={x - 7}
          y={y - 7}
        />
      )}
      <rect
        width={RECT_WIDTH}
        height={RECT_HEIGHT + value * 8}
        fill={color}
        x={x}
        y={y}
        stroke={isDark ? DARK_BLOCK_BORDER_COLOR : LIGHT_BLOCK_BORDER_COLOR}
        onClick={handleOpen}
        style={{ transition: "height 0.5s ease-in-out" }}
      />
      <text
        x={x + RECT_WIDTH / 2}
        y={-(y + RECT_HEIGHT / 2)}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
        transform="scale(1, -1)"
      >
        {value}
      </text>
      <ChangeDialog
        value={value}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        idx={idx}
        setArray={setArray}
      />
    </g>
  );
};
