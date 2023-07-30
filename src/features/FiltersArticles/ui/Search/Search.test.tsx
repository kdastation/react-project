import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "@/shared/lib/tests/renderComponent";

import { Search } from "./Search";

describe("Search Filters Articles", () => {
  it("change value", async () => {
    renderComponent(<Search />);

    const searchInput = screen.getByTestId("FiltersArtcilesSearch") as HTMLInputElement;

    await userEvent.type(searchInput, "test");

    expect(searchInput.value).toBe("test");
  });

  it("initial search value", () => {
    renderComponent(<Search />, {
      initialState: {
        filtersArticles: {
          search: "test",
        },
      },
    });

    const searchInput = screen.getByTestId("FiltersArtcilesSearch") as HTMLInputElement;

    expect(searchInput.value).toBe("test");
  });

  it("change value call fetch data", async () => {
    const fetchData = jest.fn();
    renderComponent(<Search fetchData={fetchData} />, {
      initialState: {
        filtersArticles: {
          search: "test",
        },
      },
    });

    const searchInput = screen.getByTestId("FiltersArtcilesSearch") as HTMLInputElement;

    await userEvent.type(searchInput, "asd");

    expect(fetchData).toHaveBeenCalledTimes(3);
  });
});
