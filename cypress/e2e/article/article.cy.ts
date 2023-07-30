import { getByTestId } from "cypress/helpers/getByTestId";

describe("Articles", () => {
  beforeEach(() => {
    cy.login({});
    cy.visit("/");
  });

  it("articles loaded and visible", () => {
    cy.get(getByTestId("ArticlesList")).should("exist");
    cy.get(getByTestId("ArticleItem")).should("have.length.greaterThan", 1);
  });

  it("work search", () => {
    cy.get(getByTestId("FiltersArtcilesSearch")).type("asdsasdadasdsasd");
    cy.get(getByTestId("ArticlesList")).should("exist");
    cy.get(getByTestId("ArticleItem")).should("have.length", 0);
  });
});
