interface TUIObject {
  add?: string;
  remove?: string;
  replace?: string;
}

export type TUIClass = string | TUIObject;
