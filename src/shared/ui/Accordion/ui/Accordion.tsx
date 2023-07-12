import React, { FC, ReactNode, useMemo } from "react";
import { AccordionContext } from "./AccordionContext";

export type AccordionProps = {
  openedItems: string[];
  onChange: (openedItems: string[]) => void;
  children: ReactNode;
  mode?: "default" | "multiple";
};

export const Accordion: FC<AccordionProps> = ({
  openedItems,
  onChange,
  children,
  mode = "default",
}) => {
  const openedItemsSet = useMemo(() => new Set(openedItems), [openedItems]);

  const handleChange = (name: string) => {
    const isItemOpened = openedItemsSet.has(name);

    if (mode === "default") {
      const newOpenedItems = isItemOpened
        ? openedItems.filter((item) => item !== name)
        : [...openedItems, name];

      onChange?.(newOpenedItems);
      return;
    }

    const newOpenedItems = isItemOpened ? [] : [name];

    onChange?.(newOpenedItems);
  };

  return (
    <AccordionContext.Provider
      value={{ openedItems: openedItemsSet, onChange: handleChange }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
