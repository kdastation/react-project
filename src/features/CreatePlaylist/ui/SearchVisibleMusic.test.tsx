import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "@/shared/lib/tests/renderComponent";

import { MODULE_NAME } from "../model/consts/moduleName";
import { reducer } from "../model/slice/slice";
import { SearchMusic } from "./SearchMusic/SearchMusic";
import { VisibleMusic } from "./VisibleMusic/VisibleMusic";

describe("Search and Visible Music", () => {
  it("test 1 ", () => {
    renderComponent(
      <>
        <SearchMusic />
        <VisibleMusic />
      </>,
    );

    expect(screen.getByTestId("SelectedMusic")).toBeInTheDocument();
    expect(screen.queryByTestId("FoundedMusic")).toBeNull();
  });

  it("test 2", async () => {
    renderComponent(
      <>
        <SearchMusic />
        <VisibleMusic />
      </>,
      {
        asyncReducers: {
          [MODULE_NAME]: reducer,
        },
      },
    );

    const search = screen.getByTestId("SearchMusic") as HTMLInputElement;

    await userEvent.type(search, "rammstein");

    expect(screen.getByTestId("FoundedMusic")).toBeInTheDocument();
    expect(screen.queryByTestId("SelectedMusic")).toBeNull();
  });
});
