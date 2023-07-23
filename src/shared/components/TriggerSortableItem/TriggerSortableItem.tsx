import { FC, ReactElement, ReactNode, cloneElement, createElement, isValidElement } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Id } from "@/shared/types/Id";

type TriggerSortableItemProps = {
  id: Id;
  children: (() => ReactNode) | ReactElement<HTMLElement>;
};

export const TriggerSortableItem: FC<TriggerSortableItemProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const renderChildren = () => {
    // TODO: refactoring
    console.log(listeners);
    if (isValidElement(children)) {
      return cloneElement(children, {
        ...children.props,
        ...attributes,
        style,
        ...listeners,
        ref: setNodeRef,
      });
    }

    if (typeof children === "function") {
      return children();
    }

    return null;
  };

  return <>{renderChildren()}</>;
};
