import * as RadixTabs from "@radix-ui/react-tabs";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTabs } from "./TabsProvider";

export type TabListProps = {
  children: React.ReactNode;
};

export const TabList = ({ children }: TabListProps) => {
  const { activeTab, tabClasses, dataAttributes } = useTabs();
  const [listWidth, setListWidth] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const cssVars = useMemo(() => {
    const rightTab =
      (activeTab?.offsetLeft ?? 0) + (activeTab?.offsetWidth ?? 0);
    const remainingOffset = listWidth - rightTab;
    return {
      ["--twui-offset-width"]: `${activeTab?.offsetWidth}px`,
      ["--twui-offset-left"]: `${activeTab?.offsetLeft}px`,
      ["--twui-offset-right"]: `${rightTab}px`,
      ["--twui-offset-remaining"]: `${remainingOffset}px`,
    } as React.CSSProperties;
  }, [listWidth, activeTab?.offsetWidth, activeTab?.offsetLeft]);

  const handleResize = () => {
    setListWidth(listRef?.current?.offsetWidth ?? 0);
  };

  useEffect(() => {
    window?.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <RadixTabs.List
      ref={listRef}
      style={cssVars}
      className={tabClasses?.tabList}
      {...dataAttributes}
    >
      <div {...dataAttributes} className={tabClasses?.activeTabIndicator}></div>
      {Children.map(children, (child, index) =>
        cloneElement(child as JSX.Element, { index: index.toString() })
      )}
    </RadixTabs.List>
  );
};
