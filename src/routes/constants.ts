import { BASE_ROUTES } from "_core/modules/authenticator/base-routes";

const ROUTES = {
  ...BASE_ROUTES,
  HOME: "/",
  GRAPH: "/graph",
  SEARCH: "/search",
  DETAIL: "/fighter",
  NOT_FOUND: "*",
};

export default ROUTES;
