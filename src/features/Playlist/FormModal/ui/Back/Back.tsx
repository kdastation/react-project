import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { actions } from "@/features/Playlist/FormModal/model/slice/slice";

export const Back = () => {
  const dispatch = useAppDispatch();

  const handleChangeScreen = () => {
    dispatch(actions.setScreen("main"));
    dispatch(actions.setSearch(""));
  };

  return <div onClick={handleChangeScreen}>Назад</div>;
};
