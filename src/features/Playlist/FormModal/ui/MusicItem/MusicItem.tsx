import { Music } from "@/entities/Music";
import { MusicItem as MusicItemEntity } from "@/entities/Music/Musics";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { actions } from "../../model/slice/slice";
import { TogglePlaying } from "@/entities/Player";

type MusicItemProps = {
  music: Music;
  isAdded: boolean;
};

export const MusicItem = ({ music, isAdded }: MusicItemProps) => {
  const dispatch = useAppDispatch();

  const handleSelectMusic = () => {
    dispatch(actions.selectMusic(music));
  };

  return (
    <MusicItemEntity
      text={music.text}
      rightAddon={
        <div>
          <TogglePlaying url={music.url} />
          <div data-testid="SelectMusicTrigger" onClick={handleSelectMusic}>
            {isAdded ? "remove" : "add"}
          </div>
        </div>
      }
    />
  );
};
