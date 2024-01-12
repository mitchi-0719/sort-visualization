import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { apiFetch } from "../../api/apiFetch";

export const SortButton = ({
  sortType,
  isAsc,
  array,
  setArray,
  isRunning,
  setIsRunning,
  sortIndex,
  setSortIndex,
  sortDataLength,
  setSortData,
  setCoordinateIndex,
}) => {
  const handleFetch = async () => {
    const res = await apiFetch(sortType, isAsc, array);
    setSortData(res.API_Response.sort_log.log.logs);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSortIndex(0);
    setArray([...Array(array.length)].map((_, i) => i));
    setSortData([]);
    setCoordinateIndex(
      Array.from({ length: array.length }, (_, index) => index)
    );

  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Button variant="contained" onClick={handleFetch} disabled={isRunning}>
        Start
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === 0 || !isRunning}
        onClick={() => setSortIndex((prev) => prev - 1)}
      >
        <PlayCircle sx={{ transform: "scale(-1, 1)" }} />
        Prev
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === sortDataLength - 1 || !isRunning}
        onClick={() => setSortIndex((prev) => prev + 1)}
      >
        Next
        <PlayCircle />
      </Button>
      <Button variant="contained" disabled={!isRunning} onClick={handleReset}>
        End
      </Button>
    </Box>
  );
};
