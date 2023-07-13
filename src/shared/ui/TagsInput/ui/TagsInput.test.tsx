import { render, screen } from "@testing-library/react";
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

      expect(elementTag.textContent).toBe(tag);
    });
  });

  it.todo("should be able to remove tag");

  it.todo("should add tag when typing comma");

  it("should be able to add tag when pressing enter", async () => {
    const onChange = jest.fn();

    render(<TagsInput tags={[]} onChange={onChange} />);

    const input = screen.getByTestId(testsIds.input) as HTMLInputElement;

    await userEvent.type(input, "tag-one{enter}");

    expect(onChange).toHaveBeenCalledWith(["tag-one"]);

    expect(input.value).toBe("");
  });
});
