import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { actions } from "../../model/slice/slice";
import { FoundedMusic } from "../SearchMusic/FoundedMusic/FoundedMusic";
import { SearchMusic } from "../SearchMusic/SearchMusic";

export const SearchMusicScreen = () => {
  const dispatch = useAppDispatch();

  const handleChangeScreen = () => {
    dispatch(actions.setScreen("main"));
    dispatch(actions.setSearch(""));
  };

  return (
    <div>
      <div onClick={handleChangeScreen}>back</div>
      <SearchMusic />
      <FoundedMusic />
    </div>
  );
};
