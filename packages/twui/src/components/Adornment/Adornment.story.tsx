import { MailIcon } from "@heroicons/react/outline";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Adornment } from "./Adornment";

export default {
  title: "Adornment",
  component: Adornment,
  argTypes: {},
} as ComponentMeta<typeof Adornment>;

const Template: ComponentStory<typeof Adornment> = (args) => (
  <Adornment {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "$",
};

export const IconAdornment = Template.bind({});
IconAdornment.args = {
  children: <MailIcon />,
};
