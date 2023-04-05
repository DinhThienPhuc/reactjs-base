import "assets/styles/reset.css";
import "assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import { ErrorBoundary } from "modules";
import { LoadingEllipsis } from "components";
import MainRoutes from "routes";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { reload } from "utils";

const App = () => {
  return (
    <ErrorBoundary onReset={reload}>
      <Suspense fallback={<LoadingEllipsis color="#11dce8" />}>
        <MainRoutes />
      </Suspense>
      <ToastContainer />
    </ErrorBoundary>
  );
};

export default App;
