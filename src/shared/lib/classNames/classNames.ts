type Mods = Record<string, boolean>;

export const classNames = (
  mainClass: string | null,
  mods: Mods = {},
  additionalClasses: string[] = [],
) => [
  mainClass || '',
  ...additionalClasses.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => value)
    .map(([className]) => className),
].filter(Boolean).join(' ');
