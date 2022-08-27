interface SXObject {
  add?: string;
  remove?: string;
  replace?: string;
}

export type SXClass = string | SXObject;
