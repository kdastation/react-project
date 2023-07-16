import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { TestProvider } from "./TestProvider/TestProvider";
import { Options } from "./types/Options";

export const renderComponent = (component: ReactNode, options?: Options) =>
  render(<TestProvider options={options}>{component}</TestProvider>);
