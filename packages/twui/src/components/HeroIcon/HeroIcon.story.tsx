import { MailIcon } from "@heroicons/react/outline";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeroIcon } from "./HeroIcon";

export default {
  title: "HeroIcon",
  component: HeroIcon,
  argTypes: {},
  args: {
    children: <MailIcon />,
    size: "md",
  },
} as ComponentMeta<typeof HeroIcon>;

const Template: ComponentStory<typeof HeroIcon> = (args) => (
  <HeroIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
