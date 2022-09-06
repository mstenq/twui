import { forwardRef, HTMLProps, ReactNode, Ref, useMemo } from "react";
import { useTheme } from "@/theme";
import { Color, Size, SXClass } from "@/types";
import { tw } from "@/utils";
import { TabsVariants } from "./Tabs.variants";
import {
  Tabs as RadixTabs,
  TabsProps as RadixTabsProps,
} from "@radix-ui/react-tabs";
import { TabsProvider, useTabs } from "./TabsProvider";

export type TabsSX = {
  root?: SXClass;
  tabList?: SXClass;
  activeTabIndicator?: SXClass;
  tab?: SXClass;
  tabPanels?: SXClass;
  tabPanel?: SXClass;
};

export interface TabsVariants {
  default: true;
  outline: true;
  cards: true;
  pills: true;
  unstyled: true;
}

export type TabsProps = RadixTabsProps & {
  variant?: keyof TabsVariants;
  baseVariant?: "default" | "outline" | "cards" | "pills" | "unstyled";
  children?: ReactNode;
  classes?: TabsSX;
  size?: Size;
  color?: Color;
  defaultTab?: string;
};

export type TabsTheme = Partial<
  Record<keyof TabsVariants, Omit<TabsProps, "variant" | "children">>
>;

export const TabsRoot = ({ variant = "default", ...props }: TabsProps) => {
  const theme = useTheme();
  const {
    children,
    classes,
    size = "md",
    color = "primary",
    baseVariant = "default",
    defaultTab = "0",
    ...rootProps
  } = {
    ...TabsVariants?.[variant],
    ...theme?.Tabs?.[variant],
    ...props,
  };
  const baseClasses =
    TabsVariants?.[variant]?.classes ?? TabsVariants?.[baseVariant]?.classes;

  const tabClasses = useMemo(
    () => ({
      root: tw(baseClasses?.root, classes?.root, color),
      tabList: tw(baseClasses?.tabList, classes?.tabList, color),
      activeTabIndicator: tw(
        baseClasses?.activeTabIndicator,
        classes?.activeTabIndicator,
        color
      ),
      tab: tw(baseClasses?.tab, classes?.tab, color),
      tabPanels: tw(baseClasses?.tabPanels, classes?.tabPanels, color),
      tabPanel: tw(baseClasses?.tabPanel, classes?.tabPanel, color),
    }),
    [baseClasses, classes, color]
  );

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
    }),
    [size]
  );

  return (
    <TabsProvider value={{ defaultTab, tabClasses, dataAttributes }}>
      <RadixTabs
        defaultValue={defaultTab}
        {...rootProps}
        {...dataAttributes}
        onValueChange={(index) => console.log(index)}
        className={tabClasses.root}
      >
        {children}
      </RadixTabs>
    </TabsProvider>
  );
};
