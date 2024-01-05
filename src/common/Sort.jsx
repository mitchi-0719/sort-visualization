import { Box } from "@mui/material";
import { SortSetting } from "../components/sort/SortSetting";
import { SortButton } from "../components/sort/SortButton";

export const Sort = ({
  array,
  setArray,
  sortType,
  order,
  setIsLoading,
  setSortData,
}) => {
  return (
    <Box width="80vw" display="flex" flexDirection="column">
      <SortSetting array={array} setArray={setArray} />
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
