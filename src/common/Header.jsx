import { Box } from "@mui/material";
import { ACCENT_COLOR } from "../styles/style";

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flex={1}
      p="1%"
      bgcolor={ACCENT_COLOR}
    >
      <h1 style={{ margin: 0 }}>Sort-visualization</h1>
    </Box>
  );
};
