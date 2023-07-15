import { useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { rootSelector } from "../../selectors/rootSelector";
import { actions } from "../../model/slice";
import { fetchArticlesWithFilters } from "../../services/fetchArticlesWithFilters";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";

export const Search = () => {
  const dispatch = useAppDispatch();
  const search = useSelector(rootSelector.selectSearch);
  const debounceFetchFilters = useDebounce(() => {
    dispatch(fetchArticlesWithFilters());
  }, 100);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(actions.setSearch(value));

    debounceFetchFilters();
  };

  return <input type="text" value={search} onChange={handleChangeSearch} />;
};
