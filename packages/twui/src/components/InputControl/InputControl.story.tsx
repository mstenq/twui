import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputControl } from "./InputControl";

export default {
  title: "InputControl",
  component: InputControl,
  argTypes: {},
  args: {
    label: "Label",
    description: "Label Description",
    error: "",
    required: true,
    disabled: false,
    size: "md",
    variant: "default",
  },
} as ComponentMeta<typeof InputControl>;

const Template: ComponentStory<typeof InputControl> = (args) => (
  <InputControl {...args} />
);

export const Default = Template.bind({});
Default.args = {};
