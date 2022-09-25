import { RouterPathNames } from "./routerConfig";
import { RouteProps } from "react-router-dom";

type RoutePropsApp = Omit<RouteProps, "path">;

export type IRoute = {
  path: RouterPathNames;
} & RoutePropsApp;
