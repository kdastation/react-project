import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { rootSelector } from "../../model/selectors/rootSelector";
import { actions } from "../../model/slice/slice";

export const SearchMusic = () => {
  const search = useSelector(rootSelector.selectSearchValue);
  const dispatch = useAppDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearch(event.target.value));
  };

  return (
    <div>
      <input data-testid="SearchMusic" type="text" value={search} onChange={handleSearch} />
    </div>
  );
};
