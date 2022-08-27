import { Button } from "@/components";
import { colors } from "@/types";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
    children: (
      <Button color="neutral" variant="light">
        ToolTip
      </Button>
    ),
    label: "Tooltip Label",
    placement: "bottom",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="h-72 grid place-items-center">
    <Tooltip {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
