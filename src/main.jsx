import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./RTK/store.js";

createRoot(document.getElementById("root")).render(
  // 상태 연결 : 스토어
  <Provider store={store}>
    <App />
  </Provider>
);
