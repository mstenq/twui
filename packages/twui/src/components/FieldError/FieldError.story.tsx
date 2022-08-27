import { colors } from "@/types";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FieldError } from "./FieldError";

export default {
  title: "FieldError",
  component: FieldError,
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
    children: "Field Error",
  },
} as ComponentMeta<typeof FieldError>;

const Template: ComponentStory<typeof FieldError> = (args) => (
  <FieldError {...args} />
);

export const Default = Template.bind({});
Default.args = {};
