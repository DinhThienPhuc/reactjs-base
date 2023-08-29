import "assets/styles/reset.css";
import "assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import MainRoutes from "routes";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
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
      <ToastContainer />
    </_Modules.ErrorBoundary>
  );
};

export default App;
