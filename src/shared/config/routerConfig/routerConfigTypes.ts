import { RouteProps } from 'react-router-dom';
import { RouterPathNames } from './routerConfig';

type RoutePropsApp = Omit<RouteProps, 'path'>;

export type IRoute = {
  path: RouterPathNames;
} & RoutePropsApp;
