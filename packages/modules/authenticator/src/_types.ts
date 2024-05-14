export interface IAuthenticatorProps {
  children: JSX.Element;
  isAuthenticated?: boolean;
  extendRoutes?: Record<string, string>;
  routeToGoWhenUnauthenticated?: string;
  routeToGoWhenAuthenticated?: string;
}
