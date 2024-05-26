import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import AboutUs from "../pages/about-us/AboutUs";
import ProductsPage from "../pages/products-page/ProductsPage";
import Services from "../pages/services/Services";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Layout from "../pages/layout/Layout";
import Products from "../components/Page/products/[id]/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
