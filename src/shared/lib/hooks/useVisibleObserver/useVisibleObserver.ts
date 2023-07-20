import { useEffect, useRef } from "react";
import { useCallbackRef } from "../useCallbackRef";

type UseVisibleObserverArgs = {
  callback: () => void;
};

export const useVisibleObserver = <T extends HTMLElement = HTMLDivElement>({
  callback,
}: UseVisibleObserverArgs) => {
  const elementRef = useRef<T | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const callbackRef = useCallbackRef(callback);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      observer.current = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          callbackRef?.();
        }
      });
      observer.current?.observe(element);
    }

    return () => {
      if (observer.current && element) {
        observer.current?.unobserve(element);
      }
    };
  }, [elementRef.current]);

  return {
    ref: elementRef,
  };
};
