// import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getResponse } from "@/shared/api/getResponse";
import { renderComponent } from "@/shared/lib/tests/renderComponent";

import { MODULE_NAME } from "../model/consts/moduleName";
import { reducer } from "../model/slice/slice";
import { SearchMusic } from "./SearchMusic/SearchMusic";
import { VisibleMusic } from "./VisibleMusic/VisibleMusic";

jest.mock("@/shared/api/getResponse");

describe("Search and Visible Music", () => {
  it("initial visible music ", () => {
    renderComponent(
      <>
        <SearchMusic />
        <VisibleMusic />
      </>,
    );

    expect(screen.getByTestId("SelectedMusic")).toBeInTheDocument();
    expect(screen.queryByTestId("FoundedMusic")).toBeNull();
  });

  it("when there's a value the found music should show up", async () => {
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

  it("founded music item should render", async () => {
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

    (getResponse as jest.Mock).mockReturnValue({
      result: [
        { id: 1, text: "music 1", order: 1 },
        { id: 2, text: "music 2", order: 2 },
      ],
      response: {},
    });

    await userEvent.type(search, "rammstein");

    const elements = await screen.findAllByTestId("FoundedMusicItem");

    expect(elements.length).toBe(2);
  });

  it("selected music from the found music should be displayed in the selected music list", async () => {
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

    (getResponse as jest.Mock).mockReturnValue({
      result: [
        { id: 1, text: "music 1", order: 1 },
        { id: 2, text: "music 2", order: 2 },
      ],
      response: {},
    });

    await userEvent.type(search, "rammstein");

    const triggers = await screen.findAllByTestId("SelectMusicTrigger");

    await userEvent.click(triggers[0]);

    await userEvent.clear(search);

    expect(screen.getAllByTestId("SelectedMusicItem").length).toBe(1);
  });

  it.todo("check active trigger");
});
