import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import AdminHome from "./Components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
