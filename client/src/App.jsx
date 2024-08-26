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

const router = createBrowserRouter([
  {
    path: "/",
    element: PublicLayout,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "products",
        element: <ProductView />,
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
      <h1 className="text-3xl font-bold underline">I&apos;m Rifai</h1>
      <button className="btn btn-primary">Primary</button>
    </>
  );
}

export default App;
