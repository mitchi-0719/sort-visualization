import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
