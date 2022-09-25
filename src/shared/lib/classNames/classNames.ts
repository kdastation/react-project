type Mods = Record<string, boolean>;

export const classNames = (
  mainClass: string,
  additionalClasses: string[] = [],
  mods: Mods = {}
) => {
  return [
    mainClass,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classNames, value]) => {
        return value;
      })
      .map(([className, value]) => {
        return className;
      }),
  ].join(" ");
};
