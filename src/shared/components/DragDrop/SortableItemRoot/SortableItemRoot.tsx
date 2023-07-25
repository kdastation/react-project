import { cloneElement, FC, isValidElement, ReactElement, ReactNode, useMemo } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { isFunction } from "@/shared/lib/core/guard";
import { Id } from "@/shared/types/Id";

import { SortableItemRootProvider } from "../Context/Context";

type TriggerSortableItemProps = {
  id: Id;
  children: (() => ReactNode) | ReactElement<HTMLElement>;
};

export const SortableItemRoot: FC<TriggerSortableItemProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({
      id,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const renderChildren = () => {
    // TODO: refactoring

    if (isValidElement(children)) {
      return cloneElement(children, {
        ...children.props,
        ...attributes,
        style,
        ...listeners,
        ref: setNodeRef,
      });
    }

    if (isFunction(children)) {
      return children();
    }

    return null;
  };

  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef],
  );

  return <SortableItemRootProvider value={context}>{renderChildren()}</SortableItemRootProvider>;
};
