import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
  args: {
    type: "text",
    placeholder: "Placeholder",
    disabled: false,
    readOnly: false,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  startAdornment: "$",
  classes: {
    root: {
      remove: "border rounded focus-within:ring-2",
      add: "border-b-2 focus-within:border-green-600 has-error:border-error-600",
    },
    startAdornment: { root: "h-full py-2 px-4" },
  },
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  startAdornment: "$",

  classes: {
    startAdornment: { root: "bg-gray-200 border-r-2 px-4" },
  },
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  endAdornment: "units",
  classes: {
    root: { remove: "items-stretch", add: "items-center" },
    endAdornment: {
      root: "bg-blue-500 rounded-full text-white text-xs mr-2 py-1",
    },
  },
};
