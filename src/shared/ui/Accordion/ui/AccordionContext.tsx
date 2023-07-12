import { createContext } from "react";
import useTypedContext from "@/shared/lib/hooks/useTypedContext";

type AccordionContextProps = {
  openedItems: Set<string>;
  onChange: (name: string) => void;
};

export const AccordionContext = createContext<AccordionContextProps | null>(
  null,
);

export const useAccordion = () => {
  const ctx = useTypedContext(AccordionContext);

  return ctx;
};

export const useAccordionItem = (name: string) => {
  const ctx = useAccordion();

  return {
    isOpen: ctx.openedItems.has(name),
    onChange: ctx.onChange,
  };
};
