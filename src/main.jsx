import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Router/Router";
import AuthProvider from "./context/useContextProjects";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <div className="bg-[#0b041e]">
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>

  </AuthProvider>
);
