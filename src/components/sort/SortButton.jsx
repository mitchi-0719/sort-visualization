import { Box, Button } from "@mui/material";
import { PlayCircle } from "@mui/icons-material/";

export const ButtonArea = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <Button variant="contained">解説</Button>
      <Button variant="contained">
        <PlayCircle sx={{transform: "scale(-1, 1)"}}/>
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
