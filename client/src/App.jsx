/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// component
import AboutView from "./page/AboutView";
import CartView from "./page/CartView";
import HomeView from "./page/HomeView";
import OrderView from "./page/OrderView";
import ProductView from "./page/ProductView";
import LoginView from "./page/auth/LoginView";
import RegisterView from "./page/auth/RegisterView";
import PublicLayout from "./layouts/PublicLayout";
import DetailProduct from "./page/DetailProduct";

// loader
import { loader as HomeLoader } from "./page/HomeView.jsx";
import { loader as ProductLoader } from "./page/ProductView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: HomeLoader,
      },
      {
        path: "products",
        element: <ProductView />,
        loader: ProductLoader,
      },
      {
        path: "product/:id",
        element: <DetailProduct />,
      },
      {
        path: "about",
        element: <AboutView />,
      },
      {
        path: "cart",
        element: <CartView />,
      },
      {
        path: "orders",
        element: <OrderView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
