import { useSelector } from "react-redux";

import { useGetMusicQuery } from "@/entities/Music/Musics";

import { rootSelector } from "../../../model/selectors/rootSelector";
import { MusicItem } from "../../MusicItem/MusicItem";

export const MusicList = () => {
  const search = useSelector(rootSelector.selectSearchValue);
  const selectedMusic = useSelector(rootSelector.selectSelectedMusic);

  const { data: music, isLoading } = useGetMusicQuery({ search });

  return (
    <div>
      {music?.map((music) => (
        <MusicItem music={music} isAdded={Boolean(selectedMusic[music.id])} />
      ))}
    </div>
  );
};
