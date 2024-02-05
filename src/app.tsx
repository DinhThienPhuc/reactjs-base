import "assets/styles/reset.css";
import "assets/styles/global.css";

import { ErrorBoundary } from "modules";
import { LoadingEllipsis } from "components";
import MainRoutes from "routes";
import React from "react";
import { Suspense } from "react";
import { reload } from "utils";

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
