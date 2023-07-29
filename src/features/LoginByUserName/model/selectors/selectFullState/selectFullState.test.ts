import { State } from "@/app/providers/StoreProvider/config/storeTypes";

import { initialState } from "../../slice/loginByUserNameSlice";
import { LoginByUserNameSliceState } from "../../types/types";
import { selectFullState } from "./selectFullState";

describe("selectFullState", () => {
  test("should return correctly full state", () => {
    const stateLoginByUserName: LoginByUserNameSliceState = {
      username: "qwe",
      error: "error",
      password: "qwerty",
      isLoading: false,
    };
    const state: DeepPartial<State> = {
      loginByUserName: stateLoginByUserName,
    };
    expect(selectFullState(state as State)).toEqual(stateLoginByUserName);
  });

  test("should return default state", () => {
    const state: DeepPartial<State> = {};
    expect(selectFullState(state as State)).toEqual(initialState);
  });
});
