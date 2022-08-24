import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MailIcon } from "@heroicons/react/outline";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {},
  args: {
    disabled: false,
    variant: "default",
    type: "multiple",
    collapsible: true,
    color: "primary",
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item>
      <Accordion.Summary>Option 1</Accordion.Summary>
      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Summary>Option 2</Accordion.Summary>
      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Summary>Option 3</Accordion.Summary>
      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {};
