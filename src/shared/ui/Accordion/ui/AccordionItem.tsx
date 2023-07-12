import { FC, useMemo } from "react";
import { useAccordionItem } from "./AccordionContext";
import { AccordionItemContext } from "@/shared/ui/Accordion/ui/AccordionItemContext";

type AccordionItemProps = {
  name: string;
};

export const AccordionItem: FC<AccordionItemProps> = ({ name, children }) => {
  const ctx = useAccordionItem(name);

  const values = useMemo(
    () => ({
      ...ctx,
      name,
      onChange: () => {
        ctx.onChange(name);
      },
    }),
    [name, ctx],
  );

  return (
    <AccordionItemContext.Provider value={values}>
      {children}
    </AccordionItemContext.Provider>
  );
};
