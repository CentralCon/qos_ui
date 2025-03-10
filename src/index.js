import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ uses this for rendering
import App from "./App"; // Importing the App component
import './index.css'; // Importing styles if you need them

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);

