import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/AppRouter';
import './styles/index.scss';
import { Header } from 'widgets/Header';

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={classNames(
        'app',
        [theme],
        {},
      )}
    >
      <Header />
      <AppRouter />
    </div>
  );
}

export { App };
