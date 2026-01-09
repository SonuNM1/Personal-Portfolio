import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CursorTrailCanvas from "./component/Common/CursorTrailCanvas.jsx";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence initial={false}>
    <CursorTrailCanvas
      key={Math.random()}
      color="hsla(0, 0%, 50%, 0.35)"
      style={{ opacity: 0.8 }}
    />
    <App />
  </AnimatePresence>,
);
