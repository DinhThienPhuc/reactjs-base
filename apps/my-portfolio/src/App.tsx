import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoadingEllipsis } from "@phantomthief-react/components";
import { LayoutDefault } from "./layouts";
import PageHome from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayoutDefault,
    children: [
      {
        path: "/",
        Component: PageHome,
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
