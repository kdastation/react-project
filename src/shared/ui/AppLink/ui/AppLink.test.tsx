import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppLink, AppLinkTheme } from './AppLink';

describe('App Link', () => {
  test('render', () => {
    // TODO: в либу обертку для роутера добавить
    render(<BrowserRouter><AppLink to="test">TEST</AppLink></BrowserRouter>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with the right theme class', () => {
    render(
      <BrowserRouter>
        <AppLink
          to="test"
          theme={AppLinkTheme.PRIMARY}
        >
          TEST
        </AppLink>
      </BrowserRouter>,
    );
    expect(screen.getByText('TEST')).toHaveClass('primary');
  });

  test('with the right theme class and additional class', () => {
    render(
      <BrowserRouter>
        <AppLink
          to="test"
          theme={AppLinkTheme.PRIMARY}
          className="additional"
        >
          TEST
        </AppLink>
      </BrowserRouter>,
    );
    expect(screen.getByText('TEST')).toHaveClass('primary');
    expect(screen.getByText('TEST')).toHaveClass('additional');
  });
});
