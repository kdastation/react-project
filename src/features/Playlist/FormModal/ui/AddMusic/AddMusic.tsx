import { actions } from "../../model/slice/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const AddMusic = () => {
  const dispatch = useAppDispatch();

  const handleChangeScreen = () => {
    dispatch(actions.setScreen("search-music"));
    dispatch(actions.setSearch(""));
  };

  return <div onClick={handleChangeScreen}>+ Добавить аудиозаписи</div>;
};
