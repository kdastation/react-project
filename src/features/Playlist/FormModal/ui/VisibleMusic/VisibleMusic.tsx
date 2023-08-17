import { useSelector } from "react-redux";

import { rootSelector } from "../../model/selectors/rootSelector";
import { FoundedMusic } from "../FoundedMusic/FoundedMusic";
import { SelectedMusic } from "../SelectedMusic/SelectedMusic";

export const VisibleMusic = () => {
  const searchValue = useSelector(rootSelector.selectSearchValue);

  if (searchValue) {
    return <FoundedMusic />;
  }

  return <SelectedMusic />;
};
