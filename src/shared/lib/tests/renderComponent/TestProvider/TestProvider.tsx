import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";
import { Options } from "../types/Options";
import { StoreProvider } from "@/app/providers/StoreProvider";

type TestProviderProps = {
  children: ReactNode;
  options?: Options;
};

export const TestProvider = ({ children, options = {} }: TestProviderProps) => {
  const { asyncReducers, initialState, route = "/", theme = Theme.DARK } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <ThemeProvider>
          <div className={`app ${theme}`}>{children}</div>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};
