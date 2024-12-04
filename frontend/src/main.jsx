import React from "react";
import ReactDOM from "react-dom/client"; // Make sure to import from 'react-dom/client'
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using 'createRoot'
root.render(<App />); // Render the app using the new root
