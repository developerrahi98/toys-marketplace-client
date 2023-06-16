import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <HelmetProvider>
        <AuthProviders>
          <div className="bg-violet-100">
            <RouterProvider router={router} />
          </div>
        </AuthProviders>
      </HelmetProvider>
    </React.StrictMode>
  </div>
);
