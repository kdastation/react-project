import "./styles/index.scss";

import { useEffect, useState } from "react";

import { AppRouter } from "@/app/providers/AppRouter";
import { useTheme } from "@/app/providers/ThemeProvider";
import { userActions } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Header } from "@/widgets/Header";

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      dispatch(
        userActions.setUserData({
          id: 1,
          username: "admin",
        }),
      );
    }

    setIsLoading(false);
  }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      {isLoading ? (
        <div>loading... </div>
      ) : (
        <div>
          <Header />
          <AppRouter />
        </div>
      )}
    </div>
  );
}

export { App };
