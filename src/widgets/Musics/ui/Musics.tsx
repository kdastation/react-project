import { useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchMusics, rootSelectorMusics } from "@/entities/Music/Musics";
import { MusicItem } from "@/entities/Music/Musics/ui/MusicItem/MusicItem";
import { DeleteMusicButton } from "@/features/DeleteMusic";
import { DragDropMusics } from "@/features/OrderMusics";
import { SortableItemRoot } from "@/shared/components/DragDrop";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { HStack } from "@/shared/ui/Stack";

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
              <MusicItem
                text={music.text}
                rightAddon={
                  <HStack gap="4">
                    <button
                      onClick={() => {
                        console.log("on click");
                      }}
                    >
                      asdad
                    </button>
                    <DeleteMusicButton musicId={music.id} />
                  </HStack>
                }
              />
            </div>
          </SortableItemRoot>
        ))}
      </DragDropMusics>
    </div>
  );
};
