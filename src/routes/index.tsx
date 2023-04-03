import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "layouts";
import ROUTES from "./constants";

const PageHome = lazy(() => import("pages/home"));
const PageGraph = lazy(() => import("pages/graph"));
const PageSearch = lazy(() => import("pages/search"));
const PageDetail = lazy(() => import("pages/detail"));
const PageEdit = lazy(() => import("pages/edit"));
const PageNotFound = lazy(() => import("pages/not-found"));

const SuspensedPageHome = () => (
  <Suspense fallback={<div>Spinning on Home page ...</div>}>
    <PageHome />
  </Suspense>
);

const SuspensedPageGraph = () => (
  <Suspense fallback={<div>Spinning on Graph page ...</div>}>
    <PageGraph />
  </Suspense>
);

const SuspensedPageSearch = () => (
  <Suspense fallback={<div>Spinning on Search page ...</div>}>
    <PageSearch />
  </Suspense>
);

const SuspensedPageNotFound = () => (
  <Suspense fallback={<div>Spinning on Not found page ...</div>}>
    <PageNotFound />
  </Suspense>
);

const SuspensedPageDetail = () => (
  <Suspense fallback={<div>Spinning on Fighter detail page ...</div>}>
    <PageDetail />
  </Suspense>
);

const SuspensedPageEdit = () => (
  <Suspense fallback={<div>Spinning on Fighter edit page ...</div>}>
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
