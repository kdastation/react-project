import { actions } from "../../model/slice/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

type Props = {
  url: string;
};

export const Play = ({ url }: Props) => {
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    dispatch(actions.setUrl(url));
    dispatch(actions.setPlaying(true));
  };

  return <div onClick={handlePlay}>play</div>;
};
