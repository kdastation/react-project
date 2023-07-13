import { createContext } from "react";
import useTypedContext from "@/shared/lib/hooks/useTypedContext";

type AccordionItemContextProps = {
  name: string;
  isOpen: boolean;
  onChange: () => void;
};

export const AccordionItemContext =
  createContext<AccordionItemContextProps | null>(null);

export const useAccordionItemProps = () => {
  const ctx = useTypedContext(AccordionItemContext);

  return ctx;
};
