import {
  createBrowserRouter
} from "react-router-dom";
import Login from "../Pages/Login"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <div>Hello world!</div>,
  },
]);