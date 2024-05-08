import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import { LoadingEllipsis } from "components";
import ROUTES from "routes/constants";
import Layout from "layouts";

const PageHome = lazy(() => import("pages/home"));
const PageNotFound = lazy(() => import("pages/not-found"));

const SuspensedPageHome = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" fullScreen />}>
    <PageHome />
  </Suspense>
);

const SuspensedPageNotFound = () => (
  <Suspense fallback={<LoadingEllipsis color="#11dce8" fullScreen />}>
    <PageNotFound />
  </Suspense>
);

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<SuspensedPageHome />} />
          <Route path={ROUTES.HOME} element={<SuspensedPageHome />} />
        </Route>
        <Route path="*" element={<SuspensedPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
