import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet } from "react-router";
import "./index.css";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Outlet />
    </BrowserRouter>
  </StrictMode>
);
