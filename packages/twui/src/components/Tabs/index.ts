export * from "./Tabs";
export * from "./TabList";
export * from "./Tab";
export * from "./TabPanels";
export * from "./TabPanel";
import { TabsRoot } from "./Tabs";
import { TabList } from "./TabList";
import { Tab } from "./Tab";
import { TabPanels } from "./TabPanels";
import { TabPanel } from "./TabPanel";

export const Tabs = Object.assign(TabsRoot, {
  List: TabList,
  Tab: Tab,
  Panels: TabPanels,
  Panel: TabPanel,
});
