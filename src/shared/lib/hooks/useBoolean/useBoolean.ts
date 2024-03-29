import { useMemo, useState } from "react";

type InitialState = boolean | (() => boolean);

type UseBooleanFns = {
  on: () => void;
  off: () => void;
  toggle: () => void;
};

type UseBoolean = [boolean, UseBooleanFns];

export function useBoolean(initialState: InitialState = false): UseBoolean {
  const [value, setValue] = useState(initialState);
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [],
  );
  return [value, callbacks];
}
