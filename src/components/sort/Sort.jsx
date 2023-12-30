import { Box } from "@mui/material";
import { SortArray } from "./SortArray";
import { SortButton } from "./SortButton";

export const Sort = ({ array, setArray }) => {
  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <SortArray array={array} setArray={setArray} />
      <Box height="10%">
        <SortButton />
      </Box>
    </Box>
  );
};
