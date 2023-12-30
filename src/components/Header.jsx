import { Box, Button } from "@mui/material";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flex={1}
      p="1%"
      bgcolor="rgb(154, 213, 236)"
    >
      <h1 style={{margin: 0}}>Sort-visualization</h1>
      {/* <Button variant="contained">使い方</Button> */}
    </Box>
  );
};
