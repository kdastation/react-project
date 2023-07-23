import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchMusics, rootSelectorMusics } from "@/entities/Music/Musics";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { MusicItem } from "@/entities/Music/Musics/ui/MusicItem/MusicItem";
import { DragDropMusics } from "@/features/OrderMusics";

export const Musics = () => {
  const dispatch = useAppDispatch();
  const musics = useSelector(rootSelectorMusics.selectMusics);

  useEffect(() => {
    dispatch(fetchMusics());
  }, []);

  // const handleDragEnd = (event: DragEndEvent) => {
  //   const { active, over } = event;

  //   if (over && active.id !== over?.id) {
  //     setMusics((items) => {
  //       const activeIndex = items.findIndex((music) => music.id === active.id);
  //       const overIndex = items.findIndex((music) => music.id === over.id);
  //       return arrayMove(items, activeIndex, overIndex);
  //     });
  //   }
  // };

  return (
    <div>
      <DragDropMusics musics={musics} renderItem={(music) => <MusicItem text={music.text} />} />
    </div>
  );
};
