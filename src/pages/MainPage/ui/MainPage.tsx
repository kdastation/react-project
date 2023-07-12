import React, { useState } from "react";
import { ArticlesWithFilters } from "@/widgets/ArticlesWithFilters";
import {
  Accordion,
  AccordionButton,
  AccordionContent,
  AccordionItem,
} from "@/shared/ui/Accordion";

const MainPage = () => {
  const a = 1;

  const [openedItems, setOpenedItems] = useState<string[]>([]);

  return (
    <div>
      MAin PAge
      <Accordion
        openedItems={openedItems}
        onChange={(items) => {
          setOpenedItems(items);
        }}
      >
        <AccordionItem name="a">
          <AccordionButton>click a</AccordionButton>
          <AccordionContent>A content</AccordionContent>
        </AccordionItem>

        <AccordionItem name="b">
          <AccordionButton>click a</AccordionButton>
          <AccordionContent>A content</AccordionContent>
        </AccordionItem>
      </Accordion>
      <ArticlesWithFilters />
    </div>
  );
};

export default MainPage;
