import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './app/redux/store';
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import theme from "./app/modules/components/ui/Theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-center" autoClose={2000} />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
