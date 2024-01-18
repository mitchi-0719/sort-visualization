import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { apiFetch } from "../../api/apiFetch";
import { getRandArray } from "../../feature/getRandArray";
import { autoMove } from "../../feature/autoMove";
import { useState } from "react";

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
  const [autoRunning, setAutoRunning] = useState(false);

  const handleFetch = async () => {
    const res = await apiFetch(sortType, isAsc, array);
    setSortData(res.API_Response.sort_log.log);
    setIsRunning(true);
  };

  const handleAuto = () => {
    autoMove(sortIndex, setSortIndex, sortDataLength, setAutoRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSortIndex(0);
    setArray(getRandArray(0, array.length));
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
        onClick={handleAuto}
        disabled={sortIndex === sortDataLength - 1 || !isRunning}
      >
        Auto
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === 0 || !isRunning || autoRunning}
        onClick={() => setSortIndex((prev) => prev - 1)}
      >
        <PlayCircle sx={{ transform: "scale(-1, 1)" }} />
        Prev
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === sortDataLength - 1 || !isRunning || autoRunning}
        onClick={() => setSortIndex((prev) => prev + 1)}
      >
        Next
        <PlayCircle />
      </Button>
      <Button variant="contained" disabled={!isRunning || autoRunning} onClick={handleReset}>
        End
      </Button>
    </Box>
  );
};
