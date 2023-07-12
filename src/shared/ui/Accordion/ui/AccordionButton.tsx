import { FC } from "react";
import { useAccordionItemProps } from "./AccordionItemContext";

export const AccordionButton: FC = ({ children }) => {
  const { onChange } = useAccordionItemProps();

  return <button onClick={onChange}>{children}</button>;
};
