import { forwardRef, HTMLProps, ReactNode, Ref } from "react";
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
  tab?: SXClass;
  tabPanels?: SXClass;
  tabPanel?: SXClass;
};

export interface TabsVariants {
  default: true;
}

export type TabsProps = RadixTabsProps & {
  variant?: keyof TabsVariants;
  baseVariant?: "default";
  children?: ReactNode;
  classes?: TabsSX;
  size?: Size;
  color?: Color;
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
    ...rootProps
  } = {
    ...TabsVariants?.[variant],
    ...theme?.Tabs?.[variant],
    ...props,
  };
  const baseClasses =
    TabsVariants?.[variant]?.classes ?? TabsVariants?.[baseVariant]?.classes;

  return (
    <TabsProvider>
      <RadixTabs
        defaultValue="0"
        {...rootProps}
        onValueChange={(index) => console.log(index)}
        className={tw(baseClasses?.root, classes?.root, color)}
      >
        {children}
      </RadixTabs>
    </TabsProvider>
  );
};
