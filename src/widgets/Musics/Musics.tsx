import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchMusics, rootSelectorMusics } from "@/entities/Music/Musics";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { MusicItem } from "@/entities/Music/Musics/ui/MusicItem/MusicItem";

export const Musics = () => {
  const dispatch = useAppDispatch();
  const musics = useSelector(rootSelectorMusics.selectMusics);

  useEffect(() => {
    dispatch(fetchMusics());
  }, []);

  return (
    <div>
      {musics.map((music) => (
        <MusicItem text={music.text} key={music.id} />
      ))}
    </div>
  );
};
