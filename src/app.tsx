import "assets/styles/reset.css";
import "assets/styles/global.css";

import { ErrorBoundary } from "modules";
import MainRoutes from "routes";
import { Suspense } from "react";
import { reload } from "utils";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <ErrorBoundary onReset={reload}>
      <Suspense fallback={<div>Spinning on root ...</div>}>
        <MainRoutes />
      </Suspense>
      <ToastContainer />
      {/* TODO: Fix toastify position */}
    </ErrorBoundary>
  );
};

export default App;
