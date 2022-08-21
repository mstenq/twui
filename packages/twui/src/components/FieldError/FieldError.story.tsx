import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FieldError } from "./FieldError";

export default {
  title: "FieldError",
  component: FieldError,
  argTypes: {},
  args: {
    children: "Label",
    description: "Label Description",
  },
} as ComponentMeta<typeof FieldError>;

const Template: ComponentStory<typeof FieldError> = (args) => (
  <FieldError {...args} />
);

export const Default = Template.bind({});
Default.args = {};
