import { Box } from "@mui/material";
import { Array } from "./Array";
import { ButtonArea } from "./SortButton";

export const Sort = ({ array, setArray }) => {
  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <Array array={array} setArray={setArray} />
      <Box height="10%">
        <ButtonArea />
      </Box>
    </Box>
  );
};
