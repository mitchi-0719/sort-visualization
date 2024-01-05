import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { apiFetch } from "../../api/apiFetch";

export const SortButton = ({ sortType, isAsc, array, setSortData }) => {
  return (
    <Box display="flex" justifyContent="space-around">
      {/* <Button variant="contained">解説</Button> */}
      <Button
        variant="contained"
        onClick={() => setSortData(apiFetch(sortType, isAsc, array))}
      >
        スタート
      </Button>
      <Button variant="contained">
        <PlayCircle sx={{ transform: "scale(-1, 1)" }} />
        戻る
      </Button>
      <Button variant="contained">
        進む
        <PlayCircle />
      </Button>
      <Button variant="contained">リセット</Button>
    </Box>
  );
};
