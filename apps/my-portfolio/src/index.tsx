import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { LoadingEllipsis } from "@phantomthief-react/components";
import PageContacMe from "./pages/contact-me";
import PageProjects from "./pages/projects";
import PageAboutMe from "./pages/about-me";
import { LayoutDefault } from "./layouts";
import PageHome from "./pages/home";

const routes = [
  {
    path: "/",
    Component: LayoutDefault,
    children: [
      {
        path: "/about-me",
        Component: PageAboutMe,
      },
      {
        path: "/contact-me",
        Component: PageContacMe,
      },
      {
        path: "/",
        Component: PageHome,
      },
      {
        path: "/projects",
        Component: PageProjects,
      },
    ],
  },
];

const router =
  process.env.NODE_ENV === "production"
    ? createHashRouter(routes)
    : createBrowserRouter(routes);

const App = () => (
  <RouterProvider
    router={router}
    fallbackElement={<LoadingEllipsis fullScreen />}
  />
);

export default App;
