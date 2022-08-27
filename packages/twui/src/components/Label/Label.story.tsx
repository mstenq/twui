import { colors } from "@/types";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "./Label";

export default {
  title: "Label",
  component: Label,
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
    children: "Label",
    required: false,
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {};
