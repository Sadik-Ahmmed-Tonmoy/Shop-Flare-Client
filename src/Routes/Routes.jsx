import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Layout/ShowProductsLayout/ShowProductsLayout";
import ShowProducts from "../Layout/ShowProductsLayout/ShowProductsLayout";

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
      element: <ShowProducts />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/showProducts/:category",
          element: <Products />,
        },
      ],
    },
  ]);