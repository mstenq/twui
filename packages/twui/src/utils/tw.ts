import { TUIClass } from "../types";

const normalizeClasses = (str: string) =>
  str.replace(/\s+/g, " ").trim().toLowerCase();

const removeClasses = (standardClasses: string, classesToRemove: string) => {
  let classes = normalizeClasses(standardClasses);
  const classesToRemoveNormalized = normalizeClasses(classesToRemove);
  const removeArray = classesToRemoveNormalized.split(" ");
  removeArray.forEach((classToRemove) => {
    classes = classes.replace(new RegExp(classToRemove, "g"), "");
  });
  return classes;
};

export const tw = (
  standardClasses: string | undefined = "",
  classes?: TUIClass
) => {
  if (typeof classes === "string") {
    if (classes) return `${standardClasses} ${classes}`;
    return standardClasses;
  }
  if (classes?.replace) {
    return classes.replace;
  }
  let modifiedClasses = standardClasses;
  if (classes?.remove) {
    modifiedClasses = removeClasses(standardClasses, classes.remove);
  }
  if (classes?.add) {
    modifiedClasses = modifiedClasses + " " + classes.add;
  }
  return modifiedClasses;
};
