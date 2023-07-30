import { getByTestId } from "cypress/helpers/getByTestId";
import { getUrl } from "cypress/helpers/getUrl";

describe("Playlist", () => {
  it("create playlist", () => {
    cy.login({});
    cy.visit("/about");

    cy.intercept("POST", "**/playlist").as("post");

    cy.intercept("GET", "**/playlist").as("call1");

    cy.wait("@call1");

    cy.contains("test-playlist").should("not.exist");

    cy.get(getByTestId("CreatePlaylistButton")).click();
    cy.get(getByTestId("CreatePlaylistNameInput")).type("test-playlist");

    cy.get(getByTestId("CreatePlaylistSubmit")).click();

    cy.wait("@call1");
    cy.contains("test-playlist").should("exist");
    cy.wait("@post").then((res) => {
      cy.request({
        url: `${getUrl("/playlist")}/${res.response?.body?.id}`,
        method: "DELETE",
        headers: res?.request?.headers,
      });
    });
  });
});
