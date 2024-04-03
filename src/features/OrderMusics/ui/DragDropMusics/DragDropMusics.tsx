import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Music } from "@/entities/Music";
import { musicsActions } from "@/entities/Music/Musics";

import { changeOrderMusic } from "../../model/services/changeOrderMusic";

type DragDropMusicsProps = {
  musics: Music[];
  children?: ReactNode;
};

export const DragDropMusics: FC<DragDropMusicsProps> = ({ musics, children }) => {
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

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
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={musics} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
};


console.error('aasdasdad')