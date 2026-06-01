import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext from "./context/ThemeContext.jsx";
import UserProvider from "./context/Usercontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <UserProvider>
      <App />
    </UserProvider>
  </ThemeContext>,
);
