import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ uses this for rendering
import { BrowserRouter } from 'react-router-dom';
import App from "./App"; // Importing the App component
import './index.css'; // Importing styles if you need them

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

