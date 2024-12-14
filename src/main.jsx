import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Resister from "./components/Resister/Resister.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import Orders from "./components/Orders/Orders.jsx";
import PrivateRoute from "./components/Routes/PrivateRoute.jsx";
import Profile from "./components/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>,
      },
      {
        path:"/profile", 
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
