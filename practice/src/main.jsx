import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppContext from "./components/contextApi/context.jsx";
// import { AppProvider } from "./components/contextApi/stripe-project/context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppProvider> */}
    {/* <AppContext> */}
    <App />
    {/* </AppContext> */}
    {/* </AppProvider> */}
  </React.StrictMode>
);
