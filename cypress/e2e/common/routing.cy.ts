import { getByTestId } from "cypress/helpers/getByTestId";

// describe("User authorized", () => {
//   // beforeEach(() => {
//   //   cy.intercept("POST", "http://localhost:8000/playlist", (req) => {
//   //     req.continue((res) => {
//   //       cy.request({
//   //         url: `http://localhost:8000/playlist/${res.body.id}`,
//   //         method: "DELETE",
//   //         headers: req.headers,
//   //       });
//   //     });
//   //   });
//   // });

//   // afterEach(() => {
//   //   const a = cy.readFile("cypress/fixtures/test.txt", {
//   //     log: true,
//   //   });

//   //   cy.request({
//   //     url: `http://localhost:8000/playlist/${a}`,
//   //     method: "DELETE",
//   //   });
//   // });

//   // { fixture: "playlist.json" }
//   it("pizda ebanaya", () => {

// });

// describe("test", () => {
//   it("test login", () => {
//     cy.login({});

//     cy.visit("/");
//   });
// });

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
