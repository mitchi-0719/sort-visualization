import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";
import { apiFetch } from "../../api/apiFetch";

export const SortButton = ({
  sortType,
  isAsc,
  array,
  setIsLoading,
  setSortData,
}) => {
  const handleFetch = async () => {
    setIsLoading(true);
    const res = await apiFetch(sortType, isAsc, array);
    setSortData(res);
    setIsLoading(false);
  };

  return (
    <Box display="flex" justifyContent="space-around">
      {/* <Button variant="contained">解説</Button> */}
      <Button variant="contained" onClick={handleFetch}>
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
