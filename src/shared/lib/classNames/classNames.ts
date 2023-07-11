export type Mods = Record<string, boolean>;

export const classNames = (
  mainClass: string | null | undefined,
  mods: Mods = {},
  additionalClasses: Array<string | undefined> = [],
) => [
  mainClass || '',
  ...additionalClasses.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => value)
    .map(([className]) => className),
].filter(Boolean).join(' ');
