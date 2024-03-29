import { Header } from "./common/Header";
import { Main } from "./components/Main";
import { Footer } from "./common/Footer";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { DARK_BG_COLOR, LIGHT_BG_COLOR } from "./styles/style";
import { useContext } from "react";
import { darkModeContext } from "./context/DarkModeContext";
import { AutoModeContextProvider } from "./context/AutoModeContext";

export const Top = () => {
  const { isDark } = useContext(darkModeContext);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <AutoModeContextProvider>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          height="100vh"
          bgcolor={isDark ? DARK_BG_COLOR : LIGHT_BG_COLOR}
        >
          <Header />
          <Main />
          <Footer />
        </Box>
      </ThemeProvider>
    </AutoModeContextProvider>
  );
};
