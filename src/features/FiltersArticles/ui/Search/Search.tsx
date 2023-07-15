import { useSelector } from "react-redux";
import { ChangeEvent, FC } from "react";
import { rootSelector } from "../../selectors/rootSelector";
import { actions } from "../../model/slice/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { FilterProps } from "../../model/types/FilterProps";

export const Search: FC<FilterProps> = ({ fetchData }) => {
  const dispatch = useAppDispatch();
  const search = useSelector(rootSelector.selectSearch);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(actions.setSearch(value));

    fetchData?.();
  };

  return <input type="text" value={search} onChange={handleChangeSearch} />;
};
