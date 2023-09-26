import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ShowProductsLayout from "../Layout/ShowProductsLayout/ShowProductsLayout";
import ShowProducts from "../Pages/ShowProducts/ShowProducts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/showProducts",
      element: <ShowProductsLayout/>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/showProducts/:products",
          element: <ShowProducts/>,
        },
      ],
    },
  ]);