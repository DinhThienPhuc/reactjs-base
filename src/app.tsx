import "assets/styles/global.css";
import "assets/styles/reset.css";

import { LoadingEllipsis } from "components";
import { ErrorBoundary } from "modules";
import { Suspense } from "react";
import MainRoutes from "routes";
import { reload } from "utils";
import React from "react";

const App = () => {
  return (
    <ErrorBoundary onReset={reload}>
      <Suspense fallback={<LoadingEllipsis color="#11dce8" fullScreen />}>
        <MainRoutes />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
