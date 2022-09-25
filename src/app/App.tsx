import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/AppRouter";
import "./styles/index.scss";
import { Header } from "widgets/Header";

const App = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames("app", [theme], {})}>
      <div onClick={() => toggleTheme(theme)}>asdasdad</div>
      <Header />
      <AppRouter />
    </div>
  );
};

export { App };
