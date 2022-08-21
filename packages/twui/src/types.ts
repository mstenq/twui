interface SXObject {
  add?: string;
  remove?: string;
  replace?: string;
}

export type SXClass = string | SXObject;

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
