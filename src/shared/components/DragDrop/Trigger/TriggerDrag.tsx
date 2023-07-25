import { forwardRef, ReactNode } from "react";

import { ButtonProps } from "@/shared/types/ButtonProps";

import { useSortableItemRoot } from "../Context/Context";

type TriggerDragProps = {
  children?: ReactNode;
} & ButtonProps;

// TODO: add merge refs
export const TriggerDrag = forwardRef<HTMLButtonElement, TriggerDragProps>((props, ref) => {
  const { attributes, listeners, ref: setRef } = useSortableItemRoot();

  return <button {...props} {...attributes} {...listeners} ref={setRef} />;
});
