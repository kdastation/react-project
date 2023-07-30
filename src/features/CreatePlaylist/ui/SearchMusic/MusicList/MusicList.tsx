import { useSelector } from "react-redux";

import { MusicItem, useGetMusicQuery } from "@/entities/Music/Musics";

import { rootSelector } from "../../../model/selectors/rootSelector";

export const MusicList = () => {
  const search = useSelector(rootSelector.selectSearchValue);

  const { data: music, isLoading } = useGetMusicQuery({ search });

  return <div>{music?.map((music) => <MusicItem text={music.text} />)}</div>;
};
