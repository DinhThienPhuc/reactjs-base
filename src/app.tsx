import "assets/styles/reset.css";
import "assets/styles/global.css";

import MainRoutes from "routes";
import { Suspense } from "react";
import { _Components } from "components";
import { _Modules } from "modules";
import { _Utils } from "utils";

const App = () => {
  return (
    <_Modules.ErrorBoundary onReset={_Utils.reload}>
      <Suspense
        fallback={<_Components.LoadingEllipsis color="#11dce8" fullScreen />}
      >
        <MainRoutes />
      </Suspense>
    </_Modules.ErrorBoundary>
  );
};

export default App;
