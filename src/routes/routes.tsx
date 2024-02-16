import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import YanderePage from "../pages/yandere/Yandere";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/yandere",
        element: <YanderePage />,
      },
      {
        path: "/konachan",
        element: <div>TDB</div>,
      },
    ],
  },
]);

export default routes;
