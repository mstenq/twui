import { colors } from "@/types";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from ".";

export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    color: {
      options: colors,
      control: { type: "select" },
    },
  },
  args: {
    color: "primary",
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab>One</Tabs.Tab>
      <Tabs.Tab>Two</Tabs.Tab>
      <Tabs.Tab>Three</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>
        <p>Click the tabs or pull the slider around</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Tab Panel 2</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Oh, hello there.</p>
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
