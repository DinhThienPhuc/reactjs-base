import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "layouts";
import { LoadingEllipsis } from "components";
import ROUTES from "./constants";

const PageHome = lazy(() => import("pages/home"));
const PageGraph = lazy(() => import("pages/graph"));
const PageSearch = lazy(() => import("pages/search"));
const PageDetail = lazy(() => import("pages/detail"));
const PageEdit = lazy(() => import("pages/edit"));
const PageNotFound = lazy(() => import("pages/not-found"));

const SuspensedPageHome = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
    <PageHome />
  </Suspense>
);

const SuspensedPageGraph = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
    <PageGraph />
  </Suspense>
);

const SuspensedPageSearch = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
    <PageSearch />
  </Suspense>
);

const SuspensedPageNotFound = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
    <PageNotFound />
  </Suspense>
);

const SuspensedPageDetail = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
    <PageDetail />
  </Suspense>
);

const SuspensedPageEdit = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
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
