import { Box, Button } from "@mui/material";
import {
  DARK_ACCENT_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_ACCENT_COLOR,
  LIGHT_TEXT_COLOR,
} from "../styles/style";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useContext } from "react";
import { darkModeContext } from "../context/DarkModeContext";
import { useWindowSize } from "../feature/useWindowSize";

export const Header = () => {
  const { isDark, setIsDark } = useContext(darkModeContext);
  const windowSize = useWindowSize();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flex={1}
      p="1%"
      bgcolor={isDark ? DARK_ACCENT_COLOR : LIGHT_ACCENT_COLOR}
      boxShadow="0px 4px 5px 0px rgba(0,0,0,0.5)"
      zIndex={1000}
      height={windowSize.height * 0.15}
    >
      <h1
        style={{
          margin: 0,
          color: isDark ? DARK_TEXT_COLOR : LIGHT_TEXT_COLOR,
        }}
      >
        Sort-visualization
      </h1>
      <Button
        variant="contained"
        onClick={() => setIsDark((prev) => !prev)}
        startIcon={isDark ? <LightMode /> : <DarkMode />}
      >
        {isDark ? "light" : "dark"}
      </Button>
    </Box>
  );
};
