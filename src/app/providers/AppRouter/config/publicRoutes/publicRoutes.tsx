import { IRoute, RouterPathNames } from '@/shared/config/routerConfig';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { ArticlePage } from '@/pages/ArticlePage/ArticlePage';

export const publicRoutes: IRoute[] = [
  {
    path: RouterPathNames.MAIN,
    element: <MainPage />,
  },
  {
    path: RouterPathNames.ABOUT,
    element: <AboutPage />,
  },
  {
    path: RouterPathNames.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: `${RouterPathNames.ARTICLE}/:id`,
    element: <ArticlePage />,
  },
];
