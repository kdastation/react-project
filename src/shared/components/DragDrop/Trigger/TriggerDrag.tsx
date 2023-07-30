import { forwardRef, ReactNode } from "react";

import { mergeRefs } from "@/shared/lib/hooks/mergeRefs";
import { ButtonProps } from "@/shared/types/ButtonProps";
import { TestProps } from "@/shared/types/TestProps";

import { useSortableItemRoot } from "../Context/Context";

type TriggerDragProps = {
  children?: ReactNode;
} & ButtonProps &
  TestProps;

// TODO: add merge refs
export const TriggerDrag = forwardRef<HTMLButtonElement, TriggerDragProps>((props, ref) => {
  const { attributes, listeners, ref: setRef } = useSortableItemRoot();

  return <button {...props} {...attributes} {...listeners} ref={mergeRefs(ref, setRef)} />;
});
