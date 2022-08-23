import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MailIcon } from "@heroicons/react/outline";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {},
  args: {
    disabled: false,
    variant: "default",
    size: "md",
    children: "Button",
    color: "error",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  startAdornment: <MailIcon />,
};
