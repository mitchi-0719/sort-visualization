import { Box } from "@mui/material";
import { ArrayInput } from "./ArrayInput";
import { ButtonArea } from "./SortButton";


export const Sort = ({array, setArray}) => {
  return (
    <Box flex={8}>
      <ArrayInput array={array} setArray={setArray} />
      <ButtonArea />
    </Box>
  );
};
