import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import "./styles/index.scss";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <div onClick={() => toggleTheme(theme)}>asdasdad</div>
      <Link to={"/about"}>about</Link>
      <Link to={"/"}>main</Link>
      <Routes>
        <Route path={"about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export { App };
