import { useSelector } from "react-redux";

import { rootSelector } from "../../model/selectors/rootSelector";
import { MusicItem } from "../MusicItem/MusicItem";

export const SelectedMusic = () => {
  const selectedMusic = useSelector(rootSelector.selectSelectedMusic);

  return (
    <div>
      {Object.values(selectedMusic).map((music) => (
        <MusicItem music={music} isAdded={Boolean(selectedMusic[music.id])} />
      ))}
    </div>
  );
};
