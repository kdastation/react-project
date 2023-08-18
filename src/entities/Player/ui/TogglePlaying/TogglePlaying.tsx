import { useSelector } from "react-redux";
import { rootSelector } from "../../model/selectors/rootSelector";
import { Play } from "../Play/Play";
import { Pause } from "@/entities/Player/ui/Pause/Pause";
import { State } from "@/app/providers/StoreProvider";

type Props = {
  url: string;
};

export const TogglePlaying = ({ url }: Props) => {
  const isPause = useSelector((state) => rootSelector.selectIsPauseByUrl(state as State, url));

  if (isPause) {
    return <Play url={url} />;
  }

  return <Pause />;
};
