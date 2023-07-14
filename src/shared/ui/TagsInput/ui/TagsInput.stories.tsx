import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TagsInput } from "./TagsInput";

export default {
  title: "shared/ui/TagsInput",
  component: TagsInput,
} as ComponentMeta<typeof TagsInput>;

const Template: ComponentStory<typeof TagsInput> = (args) => (
  <TagsInput {...args} />
);

export const Input = Template.bind({});

export const Example = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <TagsInput
      tags={tags}
      onChange={(newTags) => {
        setTags(newTags);
      }}
    />
  );
};
