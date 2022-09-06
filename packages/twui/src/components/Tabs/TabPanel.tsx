import * as RadixTabs from "@radix-ui/react-tabs";
import { useTabs } from "./TabsProvider";

export type TabPanelProps = {
  index?: string;
  children: React.ReactNode;
};

export const TabPanel = ({ index, children }: TabPanelProps) => {
  const { tabClasses, dataAttributes } = useTabs();
  return (
    <RadixTabs.Content
      value={index ?? "tab"}
      className={tabClasses?.tabPanel}
      {...dataAttributes}
    >
      {children}
    </RadixTabs.Content>
  );
};
