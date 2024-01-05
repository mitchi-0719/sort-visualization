import { Box } from "@mui/material";
import { SortArea } from "./SortArea";
import { SortButton } from "./SortButton";

export const Sort = ({ array, setArray, sortType, order, setIsLoading, setSortData }) => {
  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <SortArea array={array} setArray={setArray} />
      <Box height="10%">
        <SortButton
          sortType={sortType}
          isAsc={order === "asc"}
          array={array}
          setIsLoading={setIsLoading}
          setSortData={setSortData}
        />
      </Box>
    </Box>
  );
};
