import { forwardRef, ReactNode } from "react";
import { useAccordionItemProps } from "./AccordionItemContext";
import { ButtonProps } from "@/shared/types/ButtonProps";
import { callAllHandlers } from "@/shared/lib/callAllHandlers/callAllHandlers";

type AccordionButtonProps = {
  children?: ReactNode;
} & ButtonProps;

export const AccordionButton = forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(({ children, ref, type = "button", ...props }) => {
  const { onChange } = useAccordionItemProps();

  return (
    <button
      type={type}
      onClick={callAllHandlers(onChange, props.onClick)}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
