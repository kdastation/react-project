import { getQueryParams } from "./getQueryParams";

describe("getQueryParams", () => {
  it("with one param", () => {
    expect(
      getQueryParams({
        value: "test",
      }),
    ).toBe("?value=test");
  });

  it("with multi params", () => {
    expect(
      getQueryParams({
        value: "test",
        sort: "asc",
        type: "views",
      }),
    ).toBe("?value=test&sort=asc&type=views");
  });

  it("with undefined param", () => {
    expect(
      getQueryParams({
        value: "test",
        sort: "asc",
        type: undefined,
      }),
    ).toBe("?value=test&sort=asc");
  });
});
