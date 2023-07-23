import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Music } from "@/entities/Music";
import { changeOrderMusic } from "../../model/services/changeOrderMusic";
import { musicsActions } from "@/entities/Music/Musics";

type DragDropMusicsProps = {
  musics: Music[];
  renderItem: (mucis: Music) => ReactNode;
};

// TODO: refactoring
const SortableItem = ({ id, children }: { id: number; children: ReactNode }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export const DragDropMusics: FC<DragDropMusicsProps> = ({ musics, renderItem }) => {
  const dispatch = useDispatch();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over?.id) {
      // TODO: refactoring
      dispatch(
        musicsActions.changeOrders({
          id1: active.id as number,
          id2: over.id as number,
        }),
      );

      dispatch(
        changeOrderMusic({
          musicId1: active.id as number,
          musicId2: over.id as number,
        }),
      );
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={musics} strategy={verticalListSortingStrategy}>
        {musics.map((music) => (
          <SortableItem key={music.id} id={music.id}>
            {renderItem(music)}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};
