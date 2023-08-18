import { useSelector } from "react-redux";
import { rootSelector } from "../../model/selectors/rootSelector";
import { Player as AudioPlayer } from "@/shared/components/Player";

export const Player = () => {
  const url = useSelector(rootSelector.selectUrl);
  const playing = useSelector(rootSelector.selectPlaying);

  if (!url) {
    return null;
  }

  return <AudioPlayer url={url} controls playing={playing} />;
};
