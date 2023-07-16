import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { fetchArticlesWithFilters } from "../../model/services/fetchArticlesWithFilters";
import { OrderSort } from "../OrderSort/OrderSort";
import { Search } from "../Search/Search";
import { TypeSort } from "../TypeSort/TypeSort";

export const FiltersArticles = () => {
  const dispatch = useAppDispatch();

  const debouncedFetchData = useDebounce(() => {
    dispatch(fetchArticlesWithFilters());
  }, 100);

  return (
    <div>
      <Search fetchData={debouncedFetchData} />
      <TypeSort fetchData={debouncedFetchData} />
      <OrderSort fetchData={debouncedFetchData} />
    </div>
  );
};
