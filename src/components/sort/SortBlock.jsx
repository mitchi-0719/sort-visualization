import {
  RECT_HEIGHT,
  RECT_WIDTH,
  STRIKING_RECT_WIDTH,
} from "../../constants/blockConst";

export const SortBlock = ({ x, y, color, isStriking, value }) => {
  return (
    <g>
      {isStriking && (
        <rect
          width={STRIKING_RECT_WIDTH}
          height={STRIKING_RECT_WIDTH}
          fill="red"
          x={x - 7}
          y={y - 7}
        />
      )}
      <rect
        width={RECT_WIDTH}
        height={RECT_HEIGHT}
        fill={color}
        x={x}
        y={y}
        stroke="#666"
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
    </g>
  );
};
