import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { getRandArray } from "../feature/getRandArray";
import { autoMove } from "../feature/autoMove";
import { useContext } from "react";
import { autoModeContext } from "../context/AutoModeContext";

export const SortButton = ({
  arrayLength,
  setArray,
  sortIndex,
  setSortIndex,
  sortDataLength,
  setSortData,
  setCoordinateIndex,
}) => {
  const { autoRunning, setAutoRunning } = useContext(autoModeContext);

  const handleAuto = () => {
    autoMove(sortIndex, setSortIndex, sortDataLength, setAutoRunning);
  };

  const handleReset = () => {
    setSortIndex(0);
    setArray(getRandArray(0, arrayLength));
    setSortData([]);
    setCoordinateIndex(
      Array.from({ length: arrayLength }, (_, index) => index)
    );
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Button
        variant="contained"
        onClick={handleAuto}
        disabled={sortIndex === sortDataLength - 1 || autoRunning}
      >
        Auto
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === 0 || autoRunning}
        onClick={() => setSortIndex((prev) => prev - 1)}
      >
        <PlayCircle sx={{ transform: "scale(-1, 1)" }} />
        Prev
      </Button>
      <Button
        variant="contained"
        disabled={sortIndex === sortDataLength - 1 || autoRunning}
        onClick={() => setSortIndex((prev) => prev + 1)}
      >
        Next
        <PlayCircle />
      </Button>
      <Button variant="contained" disabled={autoRunning} onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};
