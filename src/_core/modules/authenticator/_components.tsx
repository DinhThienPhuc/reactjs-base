import { Navigate, useLocation } from "react-router-dom";

import useWhyDidYouUpdate from "@phantomthief/react.hooks.why-did-you-update";
import useBlock from "@phantomthief/react.hooks.block";
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

  useWhyDidYouUpdate("Authenticator", {
    location,
    isAuthenticated,
    extendRoutes,
    routeToGoWhenUnauthenticated,
    routeToGoWhenAuthenticated,
  });

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
