import { AccordionTheme } from "./Accordion";

const root = `
  TWUI-Accordion-root is-disabled:opacity-50 
  `;
const item = `
  TWUI-Accordion-item
  `;
const summaryRoot = `
  TWUI-Accordion-summary-root flex items-center justify-between w-full focus-within:outline-primary-600
  `;
const summaryText = `
  TWUI-Accordion-summary-text flex-grow text-left text-neutral-900 dark:text-white
  `;
const summaryIcon = `
  TWUI-Accordion-summary-icon text-neutral-600 w-4 transition-all duration-300 is-open:rotate-180 dark:text-white/50
  `;

const content = `
  TWUI-Accordion-content
  overflow-hidden is-open:animate-grow is-closed:animate-shrink text-neutral-700 dark:text-white
  `;

export const AccordionVariants: AccordionTheme = {
  default: {
    classes: {
      root: `${root} bg-white dark:bg-transparent divide-y dark:divide-white/10`,
      item: `${item}`,
      summary: {
        root: `${summaryRoot} p-3 hover:bg-neutral-50 dark:hover:bg-black/10`,
        text: `${summaryText} `,
        icon: `${summaryIcon} `,
      },
      content: `${content} text-sm p-3 leading-6`,
    },
  },
  contained: {
    classes: {
      root: `${root} bg-white dark:bg-transparent border rounded-lg shadow-sm divide-y overflow-hidden dark:divide-white/10 dark:border-white/10`,
      item: `${item} is-open:bg-neutral-50 is-open:dark:bg-white/10`,
      summary: {
        root: `${summaryRoot}  px-4 py-3 hover:bg-neutral-50 dark:hover:bg-white/10 is-open:dark:hover:bg-transparent`,
        text: `${summaryText} `,
        icon: `${summaryIcon} `,
      },
      content: `${content}  text-sm px-4 pb-4 leading-6`,
    },
  },
  filled: {
    classes: {
      root: `${root} `,
      item: `${item} is-open:bg-neutral-50 rounded-lg is-open:mb-2 is-open:dark:bg-white/10`,
      summary: {
        root: `${summaryRoot} p-4 rounded-lg`,
        text: `${summaryText} `,
        icon: `${summaryIcon} `,
      },
      content: `${content} text-sm px-4 pb-4 leading-6`,
    },
  },
  "filled-inverse": {
    classes: {
      root: `${root} bg-neutral-50 dark:bg-black/10 rounded-lg p-2`,
      item: `${item} is-open:bg-white is-open:dark:bg-black/50 is-open:shadow rounded-lg is-open:mb-2`,
      summary: {
        root: `${summaryRoot} p-4 rounded-lg`,
        text: `${summaryText} `,
        icon: `${summaryIcon} `,
      },
      content: `${content} text-sm px-4 pb-4 leading-6`,
    },
  },
  separated: {
    classes: {
      root: `${root} space-y-3`,
      item: `${item} border border-neutral-50 dark:border-white/10 bg-neutral-50 dark:bg-white/10 is-open:bg-transparent is-open:border-neutral-100 is-open:shadow-sm rounded-lg`,
      summary: {
        root: `${summaryRoot} p-4`,
        text: `${summaryText} `,
        icon: `${summaryIcon} `,
      },
      content: `${content} text-sm px-4 pb-4 leading-6`,
    },
  },
};
