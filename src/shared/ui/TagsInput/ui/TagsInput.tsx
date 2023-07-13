import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import { testsIds } from "../consts/testsIds";

type TagsInputProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
};

export const TagsInput: FC<TagsInputProps> = ({ tags = [], onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const isEnter = event.key === "Enter";

    if (isEnter) {
      onChange?.([...tags, value]);
      setValue("");
    }
  };

  return (
    <div>
      {tags.map((tag) => (
        <div data-testid={testsIds.tag}>{tag}</div>
      ))}
      <input
        data-testid={testsIds.input}
        type="text"
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
