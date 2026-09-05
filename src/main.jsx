import React from "react";
import { createRoot } from "react-dom/client";
import LifePlanner from "./LifePlanner";
import "./index.css";

// The original component uses window.storage.
// This compatibility layer makes it work in a normal browser using localStorage.
if (!window.storage) {
  window.storage = {
    async get(key) {
      const value = localStorage.getItem(key);
      return value === null ? null : { value };
    },
    async set(key, value) {
      localStorage.setItem(key, value);
      return { value };
    },
  };
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LifePlanner />
  </React.StrictMode>
);
