import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

describe("Search Filters Articles", () => {
  it("should search change value", () => {
    render(<Search />);

    const searchInput = screen.getByTestId("FiltersArticles.Search");
  });
});
