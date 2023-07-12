import { FC } from "react";
import { useAccordionItemProps } from "@/shared/ui/Accordion/ui/AccordionItemContext";

export const AccordionContent: FC = ({ children }) => {
  const { isOpen } = useAccordionItemProps();

  if (!isOpen) {
    return null;
  }

  return <div>{children}</div>;
};
