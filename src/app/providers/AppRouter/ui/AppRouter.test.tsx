import { screen } from "@testing-library/react";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { AppRouter } from "./AppRouter";
import { getRouteAbout, getRouteProfile } from "@/shared/router";

describe("AppRouter", () => {
  test("should render page", async () => {
    renderComponent(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId("AboutPage");

    expect(page).toBeInTheDocument();
  });

  test("unauthorized user", async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile(),
    });

    const page = await screen.findByTestId("AboutPage");

    expect(page).toBeInTheDocument();
  });

  test("authorized user", async () => {
    renderComponent(<AppRouter />, {
      route: getRouteProfile(),
      initialState: {
        user: {
          userData: {
            id: 1,
            username: "denis",
          },
        },
      },
    });

    const page = await screen.findByTestId("ProfilePage");

    expect(page).toBeInTheDocument();
  });
});
