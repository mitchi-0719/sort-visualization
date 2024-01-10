import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { apiFetch } from "../../api/apiFetch";

export const SortButton = ({
  sortType,
  isAsc,
  array,
  isRunning,
  setIsRunning,
  sortIndex,
  setSortIndex,
  sortDataLength,
  setSortData,
}) => {
  const handleFetch = async () => {
    const res = await apiFetch(sortType, isAsc, array);
    setSortData(res.API_Response.sort_log.log.logs);
    setIsRunning(true);
  };

  const handleReset = () => {
    setSortIndex(0);
    setIsRunning(false);
    setSortData([]);
  };

  return (
    <Box display="flex" justifyContent="space-around">
      {/* <Button variant="contained">解説</Button> */}
      <Button variant="contained" onClick={handleFetch} disabled={isRunning}>
        スタート
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === 0 || !isRunning}
        onClick={() => setSortIndex((prev) => prev - 1)}
      >
        <PlayCircle sx={{ transform: "scale(-1, 1)" }} />
        戻る
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === sortDataLength - 1 || !isRunning}
        onClick={() => setSortIndex((prev) => prev + 1)}
      >
        進む
        <PlayCircle />
      </Button>
      <Button variant="contained" disabled={!isRunning} onClick={handleReset}>
        終了
      </Button>
    </Box>
  );
};
