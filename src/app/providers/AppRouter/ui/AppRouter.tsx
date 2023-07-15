import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Route as RouteType } from "../types/Route";
import { routesConfig } from "../config/routesConfig";
import { SecureRoute } from "./SecureRoute/SecureRoute";

const AppRouter = () => {
  const renderWithWrapper = (route: RouteType) => {
    const element = <Suspense fallback={<div>loading...</div>}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <SecureRoute>{element}</SecureRoute> : element}
      />
    );
  };

  return <Routes>{Object.values(routesConfig).map(renderWithWrapper)}</Routes>;
};

export { AppRouter };
