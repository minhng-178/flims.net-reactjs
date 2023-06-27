import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { ThemeProvider } from "./components/ThemeContex";
import { AuthContextProvider } from "./context/AuthConext";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop />
          <App />
        </Provider>
      </BrowserRouter>
    </AuthContextProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
