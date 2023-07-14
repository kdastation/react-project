import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { testsIds } from "../consts/testsIds";
import { TagsInput } from "./TagsInput";

describe("TagsInput", () => {
  it("should render passed tags", () => {
    const tags = ["a", "b", "c"];
    render(<TagsInput tags={tags} onChange={() => {}} />);

    const tagsElements = screen.getAllByTestId(testsIds.tag);

    expect(tags.length).toBe(tagsElements.length);

    tags.forEach((tag, index) => {
      const elementTag = tagsElements[index];

      expect(elementTag.textContent?.includes(tag)).toBe(true);
    });
  });

  it("should be able to remove tag", async () => {
    const onChange = jest.fn();
    const tags = ["a", "b", "c"];

    render(<TagsInput tags={tags} onChange={onChange} />);

    const firstTag = screen.getAllByTestId(testsIds.tag)[0];

    const removeTrigger = getByTestId(firstTag, testsIds.removeTrigger);

    await userEvent.click(removeTrigger);

    expect(onChange).toHaveBeenCalledWith(["b", "c"]);
  });

  it("should add tag when typing comma", async () => {
    const onChange = jest.fn();

    const { rerender } = render(<TagsInput tags={[]} onChange={onChange} />);

    const input = screen.getByTestId(testsIds.input) as HTMLInputElement;

    await userEvent.type(input, "tag-one,");

    expect(onChange).toHaveBeenCalledWith(["tag-one"]);

    expect(input.value).toBe("");

    rerender(<TagsInput tags={["tag-one"]} onChange={onChange} />);

    await userEvent.type(input, "tag-two,");

    expect(onChange).toHaveBeenCalledWith(["tag-one", "tag-two"]);
  });

  it("should be able to add tag when pressing enter", async () => {
    const onChange = jest.fn();

    render(<TagsInput tags={[]} onChange={onChange} />);

    const input = screen.getByTestId(testsIds.input) as HTMLInputElement;

    await userEvent.type(input, "tag-one{enter}");

    expect(onChange).toHaveBeenCalledWith(["tag-one"]);

    expect(input.value).toBe("");
  });
});
