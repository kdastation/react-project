import { IRoute, RouterPathNames } from 'shared/config/routerConfig';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const publicRoutes: IRoute[] = [
  {
    path: RouterPathNames.MAIN,
    element: <MainPage />,
  },
  {
    path: RouterPathNames.ABOUT,
    element: <AboutPage />,
  },
];
