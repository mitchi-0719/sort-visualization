import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css"

createRoot(document.querySelector("#content")).render(<App />);