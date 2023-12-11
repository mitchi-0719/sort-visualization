import { Box } from "@mui/material";
import { SortBlock } from "./SortBlock";
import { generatePaleColors } from "../../feature/generatePaleColors";

export const ArrayInput = ({ array, setArray }) => {
  const paleColors = generatePaleColors(10);

  // 仮で置くだけ
  const handleChange = (n, i) => {
    if (-10 <= n && n <= 10) {
      setArray(array.map((value, index) => (index === i ? Number(n) : value)));
    } else {
      setArray(array);
    }
  };

  return (
    <Box
      display={"flex"}
      columnGap={2}
      justifyContent="center"
      alignItems="center"
      height="90%"
    >
      {array.map((value, index) => {
        return (
          <SortBlock
            key={index}
            value={value}
            index={index}
            color={paleColors[index]}
            handleChange={handleChange}
          />
        );
      })}
    </Box>
  );
};
