export const colors = [
  "neutral",
  "primary",
  "secondary",
  "tertiary",
  "error",
  "warning",
  "info",
  "success",
  "dark",
  "light",
] as const;
export type Color = typeof colors[number];
