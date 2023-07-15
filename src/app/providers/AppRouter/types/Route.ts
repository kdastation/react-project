import { RouteProps } from "react-router-dom";

export type Route = RouteProps & {
  authOnly?: boolean;
};
