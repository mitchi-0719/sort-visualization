import { Top } from "./Top";
import { DarkModeContextProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <Top />
    </DarkModeContextProvider>
  );
}

export default App;
