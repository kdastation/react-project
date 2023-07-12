import React, { FC, ReactNode, useMemo } from "react";
import { AccordionContext } from "./AccordionContext";
import { warnings } from "@/shared/ui/Accordion/consts/warnings";

export type AccordionProps = {
  openedItems: string[];
  onChange: (openedItems: string[]) => void;
  children: ReactNode;
  mode?: "single" | "multiple";
};

export const Accordion: FC<AccordionProps> = ({
  openedItems,
  onChange,
  children,
  mode = "multiple",
}) => {
  const openedItemsSet = useMemo(() => {
    if (mode === "multiple" && openedItems.length > 1) {
      console.warn(warnings.multipleOpenedItems);
      return new Set(openedItems.slice(0, 1));
    }

    return new Set(openedItems);
  }, [openedItems]);

  const handleChange = (name: string) => {
    const isItemOpened = openedItemsSet.has(name);

    if (mode === "multiple") {
      const newOpenedItems = isItemOpened
        ? openedItems.filter((item) => item !== name)
        : [...openedItems, name];

      onChange?.(newOpenedItems);
      return;
    }

    const newOpenedItems = isItemOpened ? [] : [name];

    onChange?.(newOpenedItems);
  };

  // TODO: Добавить useMemo (сделать функцию на реф келбек)
  return (
    <AccordionContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{ openedItems: openedItemsSet, onChange: handleChange }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
