import { forwardRef, ReactNode } from "react";
import { useAccordionItemProps } from "./AccordionItemContext";
import { ButtonProps } from "@/shared/types/ButtonProps";

type AccordionButtonProps = {
  children?: ReactNode;
} & ButtonProps;

export const AccordionButton = forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(({ children, ref, type = "button", ...props }) => {
  const { onChange } = useAccordionItemProps();

  // TODO: добавить mergeCallbacks
  return (
    <button type={type} onClick={onChange} {...props} ref={ref}>
      {children}
    </button>
  );
});
