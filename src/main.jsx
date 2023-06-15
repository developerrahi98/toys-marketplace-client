import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <AuthProviders>
        <div className="bg-violet-100">
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
    </React.StrictMode>
  </div>
);
