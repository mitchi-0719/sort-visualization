import { SortBlock } from "./SortBlock";

export const SortSetting = ({ array, paleColors, coordinates }) => {
  return (
    <svg width="80vw" height="70vh">
      {array.map((value, idx) => (
        <SortBlock
          key={idx}
          x={coordinates[idx].x}
          y={coordinates[idx].y}
          color={paleColors[idx]}
          isStriking={false}
          value={value}
        />
      ))}
    </svg>
  );
};
