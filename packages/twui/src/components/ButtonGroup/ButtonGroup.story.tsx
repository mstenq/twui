import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {};
