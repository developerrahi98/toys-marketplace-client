import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import { Root } from "postcss";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import AllToysPage from "../Pages/AllToys/AllToysPage";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";

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
        path:'alltoys',
        element: <AllToysPage></AllToysPage>
      },
      {
        path:'/toy/:id',
        element: <ToyDetails></ToyDetails>,
        loader:({params})=>  fetch(`http://localhost:5000/singleToy/${params.id}`)
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
        loader: () =>
          fetch(
            "https://toys-marketpalace-server-developerrahi98.vercel.app/addToy"
          ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(
            `https://toys-marketpalace-server-developerrahi98.vercel.app/addToy/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <Root></Root>,
    errorElement: <Error></Error>,
  },
]);

export default router;
