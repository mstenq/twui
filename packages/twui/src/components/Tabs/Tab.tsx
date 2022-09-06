import * as RadixTabs from "@radix-ui/react-tabs";
import { useCallback, useEffect, useRef } from "react";
import { useTabs } from "./TabsProvider";

export type TabProps = {
  index?: string;
  children: React.ReactNode;
};

export const Tab = ({ index, children }: TabProps) => {
  const { activeTab, setActiveTab, defaultTab, tabClasses, dataAttributes } =
    useTabs();
  const ref = useRef<HTMLButtonElement>(null);

  const updateActiveTab = useCallback(
    ({ offsetWidth, offsetLeft }: HTMLButtonElement) => {
      setActiveTab?.({ offsetWidth, offsetLeft });
    },
    [setActiveTab]
  );

  const handleClick = (e: React.FocusEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    updateActiveTab(target);
  };

  useEffect(() => {
    if (ref.current && !activeTab && index === defaultTab) {
      updateActiveTab(ref.current);
    }
  }, [index, activeTab, updateActiveTab, defaultTab]);

  return (
    <RadixTabs.Trigger
      ref={ref}
      value={index ?? ""}
      onFocus={handleClick}
      className={tabClasses?.tab}
      {...dataAttributes}
    >
      {children}
    </RadixTabs.Trigger>
  );
};
