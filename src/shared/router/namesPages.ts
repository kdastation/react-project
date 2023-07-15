export const NAMES_PAGES = {
  MAIN: "MAIN",
  PROFILE: "PROFILE",
  ARTICLE: "ARTICLE",
  ABOUT: "ABOUT",
} as const;

export type NamesPages = ValueOf<typeof NAMES_PAGES>;
