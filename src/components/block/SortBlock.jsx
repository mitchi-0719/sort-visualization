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
  STRIKING_RECT_COLOR,
} from "../../styles/style";
import { Context } from "../../context/context";

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
  setTrigger,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { isDark } = useContext(Context);

  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <g>
      {isStriking && (
        <rect
          width={STRIKING_RECT_WIDTH}
          height={STRIKING_RECT_HEIGHT}
          fill={strikingColor}
          x={x - 7}
          y={y - 250}
        />
      )}
      <rect
        width={RECT_WIDTH}
        height={RECT_HEIGHT + value * 8}
        fill={color}
        x={x}
        y={y - value * 8}
        stroke={isDark ? DARK_BLOCK_BORDER_COLOR : LIGHT_BLOCK_BORDER_COLOR}
        onClick={handleOpen}
      />
      <text
        x={x + RECT_WIDTH / 2}
        y={y + RECT_HEIGHT / 2}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="#333"
      >
        {value}
      </text>
      {!running && (
        <ChangeDialog
          value={value}
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          idx={idx}
          setArray={setArray}
          setTrigger={setTrigger}
        />
      )}
    </g>
  );
};
