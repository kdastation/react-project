import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { rootSelector } from "../../model/selectors/rootSelector";
import { actions } from "../../model/slice/slice";
import { MusicList } from "./MusicList/MusicList";

export const SearchMusic = () => {
  const search = useSelector(rootSelector.selectSearchValue);
  const dispatch = useAppDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearch(event.target.value));
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
      <MusicList />
    </div>
  );
};
