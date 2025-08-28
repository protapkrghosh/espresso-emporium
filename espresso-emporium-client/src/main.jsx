import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";

const router = createBrowserRouter([
   {
      path: "/",
      Component: MainLayout,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "add-coffee",
            Component: AddCoffee,
         },
         {
            path: "update-coffee",
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
