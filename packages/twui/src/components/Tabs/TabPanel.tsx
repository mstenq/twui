import * as RadixTabs from "@radix-ui/react-tabs";

export type TabPanelProps = {
  index?: string;
  children: React.ReactNode;
};

export const TabPanel = ({ index, children }: TabPanelProps) => {
  return (
    <RadixTabs.Content value={index ?? "tab"}>{children}</RadixTabs.Content>
  );
};
