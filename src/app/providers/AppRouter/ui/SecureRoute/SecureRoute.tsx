import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { rootSelectorUser } from "@/entities/User";
import { getRouteAbout } from "@/shared/router";

type SecureRouteProps = {
  children: JSX.Element;
};

export const SecureRoute: FC<SecureRouteProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(rootSelectorUser.selectUserData);

  if (!isAuth) {
    return <Navigate to={getRouteAbout()} state={{ from: location }} replace />;
  }

  return children;
};
