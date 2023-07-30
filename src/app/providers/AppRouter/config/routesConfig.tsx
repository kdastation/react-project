import { AboutPage } from "@/pages/AboutPage";
import { ArticlePage } from "@/pages/ArticlePage/ArticlePage";
import { MainPage } from "@/pages/MainPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import {
  getRouteAbout,
  getRouteArticle,
  getRouteMain,
  getRouteProfile,
  NAMES_PAGES,
  NamesPages,
} from "@/shared/router";

import { Route } from "../types/Route";

export const routesConfig: Record<NamesPages, Route> = {
  [NAMES_PAGES.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    authOnly: true,
  },
  [NAMES_PAGES.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [NAMES_PAGES.ARTICLE]: {
    path: getRouteArticle(":id"),
    element: <ArticlePage />,
    authOnly: true,
  },
  [NAMES_PAGES.PROFILE]: {
    path: getRouteProfile(),
    element: <ProfilePage />,
    authOnly: true,
  },
};
