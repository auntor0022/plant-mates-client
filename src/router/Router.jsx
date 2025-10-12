import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateAuthProvider from "../provider/PrivateAuthProvider";
import ShareTips from "../layouts/ShareTips";
import MyTips from "../layouts/MyTips";
import ErrorPage from "../components/ErrorPage";
import BrowseTips from "../layouts/BrowseTips";
import BrowseTipsDetails from "../layouts/BrowseTipsDetails";
import Loader from "../components/Loader";
import UpdateTips from "../layouts/UpdateTips";
import ExploreGardeners from "../layouts/ExploreGardeners";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomeLayout,
        loader: () => fetch("https://plant-mates-server.vercel.app/tips"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/browseTips",
        loader: () => fetch("https://plant-mates-server.vercel.app/tips"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseTips,
      },
      {
        path: "/browseTipsDetails/:id",
        loader: ({ params }) =>
          fetch(`https://plant-mates-server.vercel.app/tips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateAuthProvider>
            <BrowseTipsDetails></BrowseTipsDetails>
          </PrivateAuthProvider>
        ),
      },
      {
        path: "/shareTips",
        element: (
          <PrivateAuthProvider>
            <ShareTips></ShareTips>
          </PrivateAuthProvider>
        ),
      },
      {
        path: "/updateTips/:id",
        loader: ({ params }) =>
          fetch(`https://plant-mates-server.vercel.app/tips/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateAuthProvider>
            <UpdateTips></UpdateTips>
          </PrivateAuthProvider>
        ),
      },
      {
        path: "/myTips",
        loader: () => fetch("https://plant-mates-server.vercel.app/tips"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateAuthProvider>
            <MyTips></MyTips>
          </PrivateAuthProvider>
        ),
      },
      {
        path: "/exploreGardeners",
        loader: () => fetch("https://plant-mates-server.vercel.app/gardeners-profile"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: ExploreGardeners,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
