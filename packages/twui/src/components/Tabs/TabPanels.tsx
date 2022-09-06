import { Children, cloneElement } from "react";
import { useTabs } from "./TabsProvider";

export type TabPanelsProps = {
  children: React.ReactNode;
};

export const TabPanels = ({ children }: TabPanelsProps) => {
  const { tabClasses, dataAttributes } = useTabs();
  return (
    <div className={tabClasses?.tabPanels} {...dataAttributes}>
      {Children.map(children, (child, index) =>
        cloneElement(child as JSX.Element, { index: index.toString() })
      )}
    </div>
  );
};
