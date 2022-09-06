import React, { createContext, useContext, useMemo, useState } from "react";
import { TabsSX } from "./Tabs";

type ActiveTab = {
  offsetWidth: number;
  offsetLeft: number;
};

export type TabsState = {
  defaultTab?: string;
  activeTab?: ActiveTab;
  setActiveTab?: React.Dispatch<React.SetStateAction<ActiveTab | undefined>>;
  tabClasses?: Record<keyof TabsSX, string>;
  dataAttributes?: Record<string, string>;
};

const defaultTabsState: TabsState = {
  defaultTab: "0",
  activeTab: undefined,
  setActiveTab: () => {},
  tabClasses: undefined,
  dataAttributes: undefined,
};

export const TabsContext = createContext<TabsState>(defaultTabsState);

export const TabsProvider = ({
  value,
  children,
}: {
  value?: TabsState;
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState(defaultTabsState.activeTab);

  const contextValue = useMemo(
    () => ({
      ...defaultTabsState,
      ...value,
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab, value]
  );
  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
