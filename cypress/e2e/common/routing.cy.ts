import { getByTestId } from "cypress/helpers/getByTestId";

describe("Routing", () => {
  describe("Authorized user", () => {
    it("Visit profile page", () => {
      cy.login({});
      cy.visit("/profile");
      cy.get(getByTestId("ProfilePage")).should("exist");
    });
    it("Visit main page", () => {
      cy.login({});
      cy.visit("/");
      cy.get(getByTestId("MainPage")).should("exist");
    });
  });

  describe("Unauthorized user", () => {
    it("Visit main page", () => {
      cy.visit("/");
      cy.get(getByTestId("AboutPage")).should("exist");
    });
    it("Visit profile page", () => {
      cy.visit("/profile");
      cy.get(getByTestId("AboutPage")).should("exist");
    });
  });
});
