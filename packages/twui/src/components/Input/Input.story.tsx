import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
  args: {
    type: "text",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  startAdornment: "$",
  placeholder: "Placeholder",
  classes: {
    root: {
      remove: "border-2 rounded focus-within:ring-2",
      add: "border-b-2 focus-within:border-blue-600",
    },
    startAdornment: { root: "h-full py-2 px-4" },
  },
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  startAdornment: "$",
  placeholder: "Placeholder",
  classes: {
    startAdornment: { root: "bg-gray-200 border-r-2 h-full py-2 px-4" },
  },
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  endAdornment: "units",
  classes: {
    endAdornment: { root: "bg-blue-500 rounded-full text-white text-xs mr-2" },
  },
};
