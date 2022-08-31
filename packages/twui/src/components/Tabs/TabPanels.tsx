import { Children, cloneElement } from "react";

export type TabPanelsProps = {
  children: React.ReactNode;
};

export const TabPanels = ({ children }: TabPanelsProps) => {
  return (
    <div>
      {Children.map(children, (child, index) =>
        cloneElement(child as JSX.Element, { index: index.toString() })
      )}
    </div>
  );
};
