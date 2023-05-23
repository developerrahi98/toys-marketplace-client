import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import { Root } from "postcss";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home"
import AddToys from "../Pages/AddToys/AddToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>
      }
    ],
  },
  {
    path: "*",
    element: <Root></Root>,
    errorElement: <Error></Error>,
  },
]);

export default router;
