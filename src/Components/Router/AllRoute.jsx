import { createBrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/HomePage/Home";

import NewArivalDetailPage from "../NewArrivals/NewArivalDetailPage";
import Page from "../Pages/Product/Page";
import Shope from "../Pages/Product/Shope";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/page",
        element: <Page></Page>,
      },
      {
        path: "/shope",
        element: <Shope></Shope>,
      },
      {
        path: "/details/:_id",
        element: <NewArivalDetailPage></NewArivalDetailPage>,
      },
    ],
  },
]);

export default router;
