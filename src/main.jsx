import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import WordProvider from "./сomponents/MyContext/WordContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>
);
