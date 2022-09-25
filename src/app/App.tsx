import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/AppRouter";
import "./styles/index.scss";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <div onClick={() => toggleTheme(theme)}>asdasdad</div>
      <Link to={"/about"}>about</Link>
      <Link to={"/"}>main</Link>
      <AppRouter />
    </div>
  );
};

export { App };
