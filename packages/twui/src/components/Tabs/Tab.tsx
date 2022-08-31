import * as RadixTabs from "@radix-ui/react-tabs";
import { useCallback, useEffect, useRef } from "react";
import { useTabs } from "./TabsProvider";

export type TabProps = {
  index?: string;
  children: React.ReactNode;
};

export const Tab = ({ index, children }: TabProps) => {
  const { activeTab, setActiveTab } = useTabs();
  const ref = useRef<HTMLButtonElement>(null);

  const updateActiveTab = useCallback(
    ({ offsetWidth, offsetLeft }: HTMLButtonElement) => {
      console.log(offsetWidth);
      console.log(offsetLeft);
      setActiveTab({ offsetWidth, offsetLeft });
    },
    []
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    console.log(target);
    updateActiveTab(target);
  };

  useEffect(() => {
    if (ref.current && index === "0" && !activeTab) {
      updateActiveTab(ref.current);
    }
  }, [index, activeTab, updateActiveTab]);

  return (
    <RadixTabs.Trigger
      ref={ref}
      value={index ?? ""}
      onMouseDown={handleClick}
      className="px-4 border-b-2"
    >
      {children}
    </RadixTabs.Trigger>
  );
};
