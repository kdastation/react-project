import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { actions } from "../../model/slice/slice";

export const Pause = () => {
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    dispatch(actions.setPlaying(false));
  };

  return <div onClick={handlePlay}>pause</div>;
};
