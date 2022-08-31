import * as RadixTabs from "@radix-ui/react-tabs";
import { Children, cloneElement, useMemo } from "react";
import { useTabs } from "./TabsProvider";

export type TabListProps = {
  children: React.ReactNode;
};

export const TabList = ({ children }: TabListProps) => {
  const { activeTab } = useTabs();
  return (
    <RadixTabs.List
      style={
        {
          position: "relative",
          ["--twui-offset-width"]: `${activeTab?.offsetWidth}px`,
          ["--twui-offset-left"]: `${activeTab?.offsetLeft}px`,
        } as React.CSSProperties
      }
    >
      <div className="absolute bottom-0 left-0 w-tabwidth bg-blue-500 h-0.5 translate-x-tableft transition-transform duration-150 "></div>
      {Children.map(children, (child, index) =>
        cloneElement(child as JSX.Element, { index: index.toString() })
      )}
    </RadixTabs.List>
  );
};
