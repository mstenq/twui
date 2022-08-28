import { TooltipTheme } from "./Tooltip";

const root = `
  TWUI-Tooltip-root bg-black text-white py-0.5 px-1.5 text-sm rounded
  `;

const arrow = `
  TWUI-Tooltip-arrow absolute bg-black w-1.5 h-1.5 rotate-45 -z-10
  `;

export const TooltipVariants: TooltipTheme = {
  default: {
    classes: {
      root: `${root}`,
      arrow: `${arrow}`,
    },
  },
};
