import { selectScreen } from "./selectScreen/selectScreen";
import { selectSearchValue } from "./selectSearchValue/selectSearchValue";
import { selectSelectedMusic } from "./selectSelectedMusic/selectSelectedMusic";
import { selectName } from "./selectName/selectName";
import { selectDescription } from "./selectDescription/selectDescription";

export const rootSelector = {
  selectSearchValue,
  selectSelectedMusic,
  selectScreen,
  selectName,
  selectDescription,
};
