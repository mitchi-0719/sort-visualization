import { Box, CircularProgress, Typography } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ transform: "scale(1, -1)" }}
    >
      <CircularProgress />
      <Typography variant="h4">Loading...</Typography>
    </Box>
  );
};
