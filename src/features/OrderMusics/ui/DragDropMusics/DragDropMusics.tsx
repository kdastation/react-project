import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, ReactNode } from "react";
import { Music } from "@/entities/Music";

type DragDropMusicsProps = {
  musics: Music[];
  renderItem: (mucis: Music) => ReactNode;
};

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
  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
    // dispatch
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
