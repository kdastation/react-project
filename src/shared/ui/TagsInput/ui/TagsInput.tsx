import { ChangeEvent, FC, useState, KeyboardEvent } from "react";
import { testsIds } from "../consts/testsIds";

type TagsInputProps = {
  tags: string[];
  onChange?: (tags: string[]) => void;
};

export const TagsInput: FC<TagsInputProps> = ({ tags = [], onChange }) => {
  const [value, setValue] = useState("");

  const addTag = (newTag: string) => {
    onChange?.([...tags, newTag]);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.includes(",")) {
      const lastValue = value.split(",")[0];

      addTag(lastValue);
      setValue("");
      return;
    }

    setValue(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const isEnter = event.key === "Enter";

    if (isEnter) {
      addTag(value);
      setValue("");
    }
  };

  const handleRemoveTag = (removeTag: string) => {
    const updatedTags = tags.filter((tag) => tag !== removeTag);
    onChange?.(updatedTags);
  };

  return (
    <div>
      {tags.map((tag) => (
        <div data-testid={testsIds.tag}>
          {tag}
          <div
            data-testid={testsIds.removeTrigger}
            onClick={() => handleRemoveTag(tag)}
          >
            remove
          </div>
        </div>
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
