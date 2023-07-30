import { getByTestId } from "cypress/helpers/getByTestId";

describe("Music", () => {
  it.skip("drag drop music", () => {
    cy.intercept("GET", "**/music").as("music");
    cy.login({});
    cy.visit("/about");

    cy.wait("@music");

    // cy.dragAndDrop(getByTestId("MusicItem-0"), getByTestId("TriggerDrag-1"));

    cy.get(getByTestId("TriggerDrag-1")).drag(getByTestId("MusicItem-0"));
  });
});
