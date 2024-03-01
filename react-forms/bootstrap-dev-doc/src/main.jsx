import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";

const rou = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Opps Pagee Not Found.... Si</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={rou} />
);
