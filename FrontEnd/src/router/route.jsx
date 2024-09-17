import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Notfound from "../pages/Notfound";
import Layout from "../layouts/Layout"; 
import { Contact } from "lucide-react";
import Dashbord from "../pages/Dashbord";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <Notfound />,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/dashbord',
        element: <Dashbord/>,
      },
    ],
  },
]);
