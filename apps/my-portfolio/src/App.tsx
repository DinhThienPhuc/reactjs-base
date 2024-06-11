import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadingEllipsis } from "@phantomthief-react/components";
import PageContacMe from "./pages/contact-me";
import PageProjects from "./pages/projects";
import PageAboutMe from "./pages/about-me";
import { LayoutDefault } from "./layouts";
import PageHome from "./pages/home";

const router = createBrowserRouter([
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
]);

const App = () => (
  <RouterProvider
    router={router}
    fallbackElement={<LoadingEllipsis fullScreen />}
  />
);

export default App;
