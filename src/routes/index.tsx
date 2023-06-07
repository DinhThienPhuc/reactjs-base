import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "layouts";
import ROUTES from "routes/constants";
import { _Components } from "components";

const PageHome = lazy(() => import("pages/home"));
const PageGraph = lazy(() => import("pages/graph"));
const PageSearch = lazy(() => import("pages/search"));
const PageDetail = lazy(() => import("pages/detail"));
const PageEdit = lazy(() => import("pages/edit"));
const PageNotFound = lazy(() => import("pages/not-found"));

const SuspensedPageHome = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageHome />
  </Suspense>
);

const SuspensedPageGraph = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageGraph />
  </Suspense>
);

const SuspensedPageSearch = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageSearch />
  </Suspense>
);

const SuspensedPageNotFound = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageNotFound />
  </Suspense>
);

const SuspensedPageDetail = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageDetail />
  </Suspense>
);

const SuspensedPageEdit = () => (
  <Suspense
    fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
  >
    <PageEdit />
  </Suspense>
);

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SuspensedPageHome />} />
          <Route path={ROUTES.HOME} element={<SuspensedPageHome />} />
          <Route path={ROUTES.GRAPH} element={<SuspensedPageGraph />} />
          <Route path={ROUTES.SEARCH} element={<SuspensedPageSearch />} />
          <Route
            path={`${ROUTES.DETAIL}/:id/view`}
            element={<SuspensedPageDetail />}
          />
          <Route
            path={`${ROUTES.DETAIL}/:id/edit`}
            element={<SuspensedPageEdit />}
          />
        </Route>
        <Route path="*" element={<SuspensedPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
