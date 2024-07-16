import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";

import { LoadingEllipsis, LoadingRipple } from "@phantomthief-react/components";
import { useMediaQuery } from "@phantomthief-react/hooks";

import { LayoutDefault } from "./layouts";
import PageAboutMe from "./pages/about-me";
import PageContacMe from "./pages/contact-me";
import PageHome from "./pages/home";
import PageProjects from "./pages/projects";

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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const matches = useMediaQuery("(min-width: 768px)");
  console.log("matches", matches);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingRipple fullScreen />;
  }

  return (
    <RouterProvider
      router={router}
      fallbackElement={<LoadingEllipsis fullScreen />}
    />
  );
};

export default App;
