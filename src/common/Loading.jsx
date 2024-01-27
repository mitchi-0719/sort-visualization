import { Box } from "@mui/material";

export const Loading = () => {
  return (
    <Box sx={{ transform: "scale(1, -1)" }}>
      <h1>Loading...</h1>
    </Box>
  );
};
