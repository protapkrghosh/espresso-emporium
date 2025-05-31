import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      Component: MainLayout,
      children: [
         {
            index: true,
            Component: Home,
            loader: () => fetch(`${import.meta.env.VITE_URL}/coffees`),
         },
         {
            path: "addCoffee",
            Component: AddCoffee,
         },
         {
            path: "details/:id",
            Component: CoffeeDetails,
            loader: () => fetch(`${import.meta.env.VITE_URL}/coffees`),
         },
         {
            path: "updateCoffee",
            Component: UpdateCoffee,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
   </StrictMode>
);
