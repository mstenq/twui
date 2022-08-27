import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";

import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {},
  args: {
    children: <Button>ToolTip</Button>,
    label: "Tooltip Label",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="h-72 grid place-items-center">
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
