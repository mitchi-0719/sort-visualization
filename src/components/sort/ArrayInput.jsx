import { Box } from "@mui/material";
import { SortBlock } from "./SortBlock";

export const ArrayInput = ({ array, setArray }) => {
  // 仮で置くだけ
  const handleChange = (n, i) => {
    if (-10 <= n && n <= 10) {
      setArray(array.map((value, index) => (index === i ? Number(n) : value)));
    } else {
      setArray(array);
    }
  };

  return (
    <Box display={"flex"} columnGap={2} justifyContent="center">
      {array.map((value, index) => {
        return (
          <SortBlock
            key={index}
            value={value}
            index={index}
            handleChange={handleChange}
          />
        );
      })}
    </Box>
  );
};
