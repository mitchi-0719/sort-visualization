import { Top } from "./Top";
import { ContextProvider } from "./context/contextProvider";

function App() {
  return (
    <ContextProvider>
      <Top />
    </ContextProvider>
  );
}

export default App;
