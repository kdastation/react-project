import { useMemo } from "react";

import { mergeRefs, ReactRef } from "./mergeRefs";

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  return useMemo(() => mergeRefs(...refs), refs);
}
