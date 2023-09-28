import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ShowProductsLayout from "../Layout/ShowProductsLayout/ShowProductsLayout";
import ShowProducts from "../Pages/ShowProductPages/ShowProducts/ShowProducts";
import ShowDetails from "../Pages/Home/ShowDetails/ShowDetails";
import ShowByCategory from "../Pages/ShowProductPages/ShowByCategory/ShowByCategory";

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
        {
          path: "/showDetails/:id",
          element: <ShowDetails/>,
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
        {
          path: "showByCategory/:category",
          element: <ShowByCategory/>,
        },
      ],
    },
  ]);