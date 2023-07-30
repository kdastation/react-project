import { useSelector } from "react-redux";

import { useGetMusicQuery } from "@/entities/Music/Musics";

import { rootSelector } from "../../../model/selectors/rootSelector";
import { MusicItem } from "../../MusicItem/MusicItem";

export const FoundedMusic = () => {
  const search = useSelector(rootSelector.selectSearchValue);
  const selectedMusic = useSelector(rootSelector.selectSelectedMusic);

  const { data: music, isLoading, isFetching } = useGetMusicQuery({ search });

  if (isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div data-testid="FoundedMusic">
      {music?.map((music) => (
        <div data-testid="FoundedMusicItem">
          <MusicItem music={music} isAdded={Boolean(selectedMusic[music.id])} />
        </div>
      ))}
    </div>
  );
};
