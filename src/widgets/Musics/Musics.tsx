import { useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchMusics, rootSelectorMusics } from "@/entities/Music/Musics";
import { MusicItem } from "@/entities/Music/Musics/ui/MusicItem/MusicItem";
import { DragDropMusics } from "@/features/OrderMusics";
import { SortableItemRoot, TriggerDrag } from "@/shared/components/DragDrop";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const Musics = () => {
  const dispatch = useAppDispatch();
  const musics = useSelector(rootSelectorMusics.selectMusics);

  useEffect(() => {
    dispatch(fetchMusics());
  }, []);

  return (
    <div>
      <DragDropMusics musics={musics}>
        {musics.map((music) => (
          <SortableItemRoot key={music.id} id={music.id}>
            <div>
              <MusicItem text={music.text} rightAddon={<TriggerDrag>trigger</TriggerDrag>} />
            </div>
          </SortableItemRoot>
        ))}
      </DragDropMusics>
    </div>
  );
};
