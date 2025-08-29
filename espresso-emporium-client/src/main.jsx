import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import PageNotFound from "./pages/PageNotFound";
import CoffeeDetails from "./pages/CoffeeDetails";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import AuthProvider from "./Authentication/contexts/AuthProvider";
import Users from "./pages/Users";

const router = createBrowserRouter([
   {
      path: "/",
      Component: MainLayout,
      children: [
         {
            index: true,
            loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/coffees`),
            Component: Home,
         },
         {
            path: "add-coffee",
            Component: AddCoffee,
         },
         {
            path: "details/:id",
            loader: ({ params }) =>
               fetch(`${import.meta.env.VITE_BASE_URL}/coffees/${params.id}`),
            Component: CoffeeDetails,
         },
         {
            path: "update/:id",
            loader: ({ params }) =>
               fetch(`${import.meta.env.VITE_BASE_URL}/coffees/${params.id}`),
            Component: UpdateCoffee,
         },
         {
            path: "signin",
            Component: SignIn,
         },
         {
            path: "signup",
            Component: SignUp,
         },
         {
            path: "users",
            loader: () => fetch(`${import.meta.env.VITE_BASE_URL}/users`),
            Component: Users,
         },
         {
            path: "*",
            Component: PageNotFound,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
         <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
   </StrictMode>
);
