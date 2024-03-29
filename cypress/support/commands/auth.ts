import { getUrl } from "cypress/helpers/getUrl";

import { UserData } from "../../../src/entities/User";

type LoginArgs = {
  username?: string;
  password?: string;
};

export const login = ({ username = "admin", password = "123" }: LoginArgs) =>
  cy
    .request({
      method: "POST",
      url: getUrl("/login"),
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem("user", "test");
    });

declare global {
  namespace Cypress {
    interface Chainable {
      login(args: LoginArgs): Chainable<UserData>;
    }
  }
}
