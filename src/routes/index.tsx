import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import ROUTES from "./constant";

const PageHome = lazy(() => import("pages/home"));
const PageLogin = lazy(() => import("pages/login"));
const PageNotFound = lazy(() => import("pages/not-found"));

const SuspensedPageHome = () => (
  <Suspense fallback={<div>Spinning on Notfound page ...</div>}>
    <PageHome />
  </Suspense>
);

const SuspensedPageLogin = () => (
  <Suspense fallback={<div>Spinning on Login page ...</div>}>
    <PageLogin />
  </Suspense>
);

const SuspensedPageNotFound = () => (
  <Suspense fallback={<div>Spinning on Notfound page ...</div>}>
    <PageNotFound />
  </Suspense>
);

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<SuspensedPageHome />} />
          <Route path={ROUTES.HOME} element={<SuspensedPageHome />} />
          <Route path={ROUTES.LOGIN} element={<SuspensedPageLogin />} />
        </Route>
        <Route path="*" element={<SuspensedPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
