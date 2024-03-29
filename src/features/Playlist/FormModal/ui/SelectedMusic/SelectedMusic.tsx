import { useSelector } from "react-redux";

import { rootSelector } from "../../model/selectors/rootSelector";
import { MusicItem } from "../MusicItem/MusicItem";

export const SelectedMusic = () => {
  const selectedMusic = useSelector(rootSelector.selectSelectedMusic);

  return (
    <div data-testid="SelectedMusic">
      {Object.values(selectedMusic).map((music) => (
        <div data-testid="SelectedMusicItem">
          <MusicItem music={music} isAdded={Boolean(selectedMusic[music.id])} />
        </div>
      ))}
    </div>
  );
};
