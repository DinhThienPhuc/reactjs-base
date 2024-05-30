import { Navigate, useLocation } from "react-router-dom";

import { useBlock } from "@phantomthief-react/hooks";
import { IAuthenticatorProps } from "./_types";
import { BASE_ROUTES } from "./_base-routes";
import React from "react";

export const Authenticator = ({
  children,
  isAuthenticated = false,
  extendRoutes,
  routeToGoWhenUnauthenticated,
  routeToGoWhenAuthenticated,
}: IAuthenticatorProps) => {
  const location = useLocation();

  const routes = useBlock(() => ({
    ...BASE_ROUTES,
    ...extendRoutes,
  }));

  if (isAuthenticated && location.pathname === routes.LOGIN) {
    if (routeToGoWhenAuthenticated) {
      return <Navigate to={routeToGoWhenAuthenticated} />;
    }
    return <Navigate to={routes.HOME} />;
  }

  if (!isAuthenticated && location.pathname !== routes.LOGIN) {
    if (routeToGoWhenUnauthenticated) {
      return <Navigate to={routeToGoWhenUnauthenticated} />;
    }
    return <Navigate to={routes.LOGIN} />;
  }

  return children;
};
