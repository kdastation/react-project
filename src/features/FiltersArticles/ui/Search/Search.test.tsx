import { screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { Search } from "./Search";

describe("Search Filters Articles", () => {
  it("should search change value", () => {
    renderComponent(<Search />);

    const searchInput = screen.getByTestId("FiltersArticles.Search");

    expect(searchInput).toBeInTheDocument();
  });
});
