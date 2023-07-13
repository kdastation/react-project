type Args<T extends Function> = T extends (...args: infer R) => any ? R : never;

export const callAllHandlers = <T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) =>
  function func(event: Args<T>[0]) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
