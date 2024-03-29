import { ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { actions } from "../../model/slice/slice";
import { FilterProps } from "../../model/types/FilterProps";
import { rootSelector } from "../../selectors/rootSelector";

export const Search: FC<FilterProps> = ({ fetchData }) => {
  const dispatch = useAppDispatch();
  const search = useSelector(rootSelector.selectSearch);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(actions.setSearch(value));

    fetchData?.();
  };

  return (
    <input
      data-testid="FiltersArtcilesSearch"
      type="text"
      value={search}
      onChange={handleChangeSearch}
    />
  );
};
