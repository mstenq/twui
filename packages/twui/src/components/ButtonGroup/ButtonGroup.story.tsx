import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip, Button, IconButton } from "@/components";

import { ButtonGroup } from "./ButtonGroup";
import { colors } from "@/types";
import {
  ChatAltIcon,
  MailIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
    variant: "default",
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Tooltip label="Testing1">
      <Button startAdornment={<PaperAirplaneIcon />}>Test</Button>
    </Tooltip>
    <Tooltip label="Testing2">
      <Button>Test</Button>
    </Tooltip>
    <Button>No Tooltip</Button>
    <Tooltip label="Testing3">
      <Button endAdornment={<MailIcon />}>Test</Button>
    </Tooltip>
    <IconButton>
      <MailIcon />
    </IconButton>
    <Tooltip label="Testing4">
      <IconButton>
        <ChatAltIcon />
      </IconButton>
    </Tooltip>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};
