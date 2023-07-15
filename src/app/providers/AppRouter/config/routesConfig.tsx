import {
  NamesPages,
  NAMES_PAGES,
  getRouteAbout,
  getRouteArticle,
  getRouteMain,
  getRouteProfile,
} from "@/shared/router";

import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";
import { ArticlePage } from "@/pages/ArticlePage/ArticlePage";
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
