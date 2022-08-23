import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MailIcon } from "@heroicons/react/outline";
import { IconButton } from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  argTypes: {},
  args: {
    disabled: false,
    variant: "default",
    size: "md",
    children: <MailIcon />,
    color: "error",
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
