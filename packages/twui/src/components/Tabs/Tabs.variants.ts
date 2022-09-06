import { TabsTheme } from "./Tabs";

const root = `
  TWUI-Tabs-root 
  `;

const tabList = `
  TWUI-Tabs-tabList relative flex
  `;

const activeTabIndicator = `
  TWUI-Tabs-activeTabIndicator 
  `;

const tab = `
  TWUI-Tabs-tab block
  is-xl:py-3 is-xl:px-5 is-xl:text-xl
  is-lg:py-2 is-lg:px-4 is-lg:text-lg
  is-md:py-1.5 is-md:px-3 is-md:text-base
  is-sm:py-1 is-sm:px-2 is-sm:text-sm
  is-xs:py-0.5 is-xs:px-1.5 is-xs:text-xs
  `;

const tabPanels = `
  TWUI-Tabs-tabPanels 
  is-xl:p-4
  is-lg:p-3
  is-md:p-2
  is-sm:p-1.5
  is-xs:p-1
  `;

const tabPanel = `
  TWUI-Tabs-tabPanel dark:text-white
  `;

export const TabsVariants: TabsTheme = {
  default: {
    classes: {
      root: `${root}`,
      tabList: `${tabList} border-b-2`,
      activeTabIndicator: `${activeTabIndicator} absolute bottom-[-2px] left-0 w-tabWidth bg-primary-600 dark:bg-primary-400 h-[2px] translate-x-tabLeft transition-transform duration-150`,
      tab: `${tab} is-active:text-primary-700 dark:is-active:text-primary-400 transition-all duration-150 dark:text-neutral-400`,
      tabPanels: `${tabPanels} `,
      tabPanel: `${tabPanel}`,
    },
  },
  outline: {
    classes: {
      root: `${root} `,
      tabList: `${tabList} `,
      activeTabIndicator: `${activeTabIndicator} hidden`,
      tab: `${tab} border rounded-t border-transparent is-active:border-neutral-200 is-active:border-b-transparent is-active:text-primary-600
      before:content-['_'] before:absolute before:block before:left-0 before:bottom-0 before:w-tabLeft before:h-px before:border-b
      after:content-['_'] after:absolute after:block after:left-tabRight after:bottom-0 after:w-tabRemaining after:h-px after:border-b
      is-active:dark:border-neutral-600 dark:is-active:text-primary-400 dark:text-neutral-300 dark:is-active:border-b-transparent before:dark:border-neutral-600 after:dark:border-neutral-600`,
      tabPanels: `${tabPanels} `,
      tabPanel: `${tabPanel}`,
    },
  },
  cards: {
    classes: {
      root: `${root} `,
      tabList: `${tabList}`,
      activeTabIndicator: `${activeTabIndicator} hidden`,
      tab: `${tab} bg-neutral-50 border-b-transparent border-t border-r first-of-type:border-l is-active:bg-transparent is-active:border-neutral-200 is-active:border-b-transparent is-active:text-primary-600 is-active:border-t-primary-600
      dark:bg-black/20 dark:is-active:border-t-primary-400 dark:is-active:bg-transparent dark:border-neutral-600
      before:content-['_'] before:absolute before:block before:left-0 before:bottom-0 before:w-tabLeft before:h-px before:border-b
      after:content-['_'] after:absolute after:block after:left-tabRight after:bottom-0 after:w-tabRemaining after:h-px after:border-b
      dark:is-active:border-neutral-500 dark:is-active:text-primary-400 dark:text-neutral-300 dark:is-active:border-b-transparent dark:before:border-neutral-600 dark:after:border-neutral-600`,
      tabPanels: `${tabPanels} `,
      tabPanel: `${tabPanel}`,
    },
  },
  pills: {
    classes: {
      root: `${root}`,
      tabList: `${tabList} ring-1 ring-offset-2 ring-neutral-300 inline rounded-full inline-flex`,
      activeTabIndicator: `${activeTabIndicator} -z-10 rounded-full absolute top-0 left-0 h-full w-tabWidth bg-primary-600 dark:bg-primary-400 translate-x-tabLeft transition-transform duration-150`,
      tab: `${tab} is-active:text-white dark:is-active:text-primary-400 transition-all duration-150 dark:text-neutral-400`,
      tabPanels: `${tabPanels} `,
      tabPanel: `${tabPanel}`,
    },
  },
  unstyled: {
    classes: {
      root: ``,
      tabList: ``,
      activeTabIndicator: ``,
      tab: ``,
      tabPanels: ``,
      tabPanel: ``,
    },
  },
};
