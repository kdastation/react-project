import { ReactNode, forwardRef } from "react";
import { ButtonProps } from "@/shared/types/ButtonProps";
import { useContext } from "../Context/useContext";

type TriggerDragProps = {
  children?: ReactNode;
} & ButtonProps;

// TODO: add merge refs
export const TriggerDrag = forwardRef<HTMLButtonElement, TriggerDragProps>((props, ref) => {
  const { attributes, listeners, ref: setRef } = useContext();

  return <button {...props} {...attributes} {...listeners} ref={setRef} />;
});
