import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const cb = ReactDOM.createRoot(container);
cb.render(<App />);
