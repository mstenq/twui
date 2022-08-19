import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InputAdornment } from "./InputAdornment";

export default {
  title: "InputAdornment",
  component: InputAdornment,
  argTypes: {},
} as ComponentMeta<typeof InputAdornment>;

const Template: ComponentStory<typeof InputAdornment> = (args) => (
  <InputAdornment {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "$",
};
