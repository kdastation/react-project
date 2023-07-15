export const typesSort = {
  VIEWS: "views",
  TITLE: "title",
} as const;

export type TypesSort = ValueOf<typeof typesSort>;
