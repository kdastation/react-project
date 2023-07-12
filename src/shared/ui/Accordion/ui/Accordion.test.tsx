import { render, screen } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionProps } from "./Accordion";
import {
  AccordionButton,
  AccordionContent,
  AccordionItem,
} from "@/shared/ui/Accordion";

type InitialAppProps = {
  initialOpened?: string[];
  mode?: AccordionProps["mode"];
};

const TestApp = ({ initialOpened = [], mode }: InitialAppProps) => {
  const [openedItems, setOpenedItems] = useState(initialOpened);

  return (
    <Accordion openedItems={openedItems} onChange={setOpenedItems} mode={mode}>
      <AccordionItem name="a">
        <AccordionButton>A Trigger</AccordionButton>
        <AccordionContent>A Content</AccordionContent>
      </AccordionItem>
      <AccordionItem name="b">
        <AccordionButton>B Trigger</AccordionButton>
        <AccordionContent>B Content</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

describe("Accordion", () => {
  it("should show always triggers", () => {
    render(<TestApp />);

    expect(screen.getByText("A Trigger")).toBeInTheDocument();
    expect(screen.getByText("B Trigger")).toBeInTheDocument();

    expect(screen.queryByText("A Content")).toBeNull();
    expect(screen.queryByText("B Content")).toBeNull();
  });

  it("should show content of opened element", () => {
    render(<TestApp initialOpened={["a"]} />);

    expect(screen.getByText("A Content")).toBeVisible();

    expect(screen.queryByText("B Content")).toBeNull();
  });

  it("should open element on click trigger", async () => {
    render(<TestApp />);

    const aTrigger = screen.getByText("A Trigger");

    await userEvent.click(aTrigger);

    expect(screen.getByText("A Content")).toBeInTheDocument();
  });

  it("should close element if its opened", async () => {
    render(<TestApp initialOpened={["a"]} />);

    expect(screen.getByText("A Content")).toBeInTheDocument();

    const aTrigger = screen.getByText("A Trigger");

    await userEvent.click(aTrigger);

    expect(screen.queryByText("A Content")).toBeNull();
  });

  it("should correct work in single mode", async () => {
    render(<TestApp initialOpened={["a"]} mode="single" />);

    const bTrigger = screen.getByText("B Trigger");

    await userEvent.click(bTrigger);

    expect(screen.getByText("B Content")).toBeInTheDocument();
    expect(screen.queryByText("A Content")).toBeNull();
  });
});
