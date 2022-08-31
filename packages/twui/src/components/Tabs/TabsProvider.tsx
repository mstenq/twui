import React, { createContext, useContext, useMemo, useState } from "react";

type ActiveTab = {
  offsetWidth: number;
  offsetLeft: number;
};

export type TabsState = {
  activeTab?: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab | undefined>>;
};

const defaultTabsState: TabsState = {
  activeTab: undefined,
  setActiveTab: () => {},
};

export const TabsContext = createContext<TabsState>(defaultTabsState);

export const TabsProvider = ({
  value = defaultTabsState,
  children,
}: {
  value?: TabsState;
  children: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState(defaultTabsState.activeTab);

  const contextValue = useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );
  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
