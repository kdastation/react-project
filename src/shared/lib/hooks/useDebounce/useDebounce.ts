import { MutableRefObject, useCallback, useRef } from "react";
import { useEvent } from "@/shared/lib/hooks/useEvent";

export const useDebounce = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  // TODO: зарефакторить
  const timer = useRef() as MutableRefObject<any>;
  const eventCallback = useEvent(callback);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        eventCallback(...args);
      }, delay);
    },
    [delay],
  );
};
