import { forwardRef } from "react";
import { useAccordionItemProps } from "@/shared/ui/Accordion/ui/AccordionItemContext";
import { DivProps } from "@/shared/types/DivProps";

type AccordionContentProps = DivProps;

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ref, ...props }) => {
  const { isOpen } = useAccordionItemProps();

  if (!isOpen) {
    return null;
  }

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
});
