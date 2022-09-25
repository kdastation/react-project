type Mods = Record<string, boolean>;

export const classNames = (
  mainClass: string,
  additionalClasses: string[] = [],
  mods: Mods = {},
) => [
  mainClass,
  ...additionalClasses.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => value)
    .map(([className]) => className),
].join(' ');
