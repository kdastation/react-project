import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionButton } from "./AccordionButton";
import { AccordionContent } from "@/shared/ui/Accordion";

export default {
  title: "shared/ui/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const MultipleAccordion = Template.bind({});
MultipleAccordion.args = {
  children: (
    <>
      <AccordionItem name="a">
        <AccordionButton>a trigger</AccordionButton>
        <AccordionContent>a content</AccordionContent>
      </AccordionItem>
      <AccordionItem name="b">
        <AccordionButton>b trigger</AccordionButton>
        <AccordionContent>b content</AccordionContent>
      </AccordionItem>
    </>
  ),
  openedItems: ["a", "b"],
};

export const SingleAccordion = Template.bind({});
SingleAccordion.args = {
  children: (
    <>
      <AccordionItem name="a">
        <AccordionButton>a trigger</AccordionButton>
        <AccordionContent>a content</AccordionContent>
      </AccordionItem>
      <AccordionItem name="b">
        <AccordionButton>b trigger</AccordionButton>
        <AccordionContent>b content</AccordionContent>
      </AccordionItem>
    </>
  ),
  mode: "single",
  openedItems: ["a"],
};
