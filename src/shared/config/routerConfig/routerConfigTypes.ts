import { RouteProps } from 'react-router-dom';

type RoutePropsApp = Omit<RouteProps, 'path'>;

export type IRoute = {
  path: string;
} & RoutePropsApp;
