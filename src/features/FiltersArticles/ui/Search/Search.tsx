import { useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { rootSelector } from "../../selectors/rootSelector";
import { actions } from "../../model/slice";
import { fetchArticles } from "@/entities/Article/Articles";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const Search = () => {
  const dispatch = useAppDispatch();
  const search = useSelector(rootSelector.selectSearch);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(actions.setSearch(value));

    dispatch(fetchArticles({ search: value }));
  };

  return <input type="text" value={search} onChange={handleChangeSearch} />;
};
