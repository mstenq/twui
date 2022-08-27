import { SXClass } from "@/types";

const normalizeClasses = (str: string) => str.replace(/\s+/g, " ").trim();

const removeClasses = (standardClasses: string, classesToRemove: string) => {
  let classes = normalizeClasses(standardClasses);
  const classesToRemoveNormalized = normalizeClasses(classesToRemove);
  const removeArray = classesToRemoveNormalized.split(" ");
  removeArray.forEach((classToRemove) => {
    classes = classes.replace(new RegExp(classToRemove, "g"), "");
  });
  return classes;
};

const replaceColor = (classString: string, replacementColor?: string) => {
  if (!replacementColor) return classString;
  return classString.replace(
    new RegExp("-primary-", "g"),
    `-${replacementColor}-`
  );
};

export const tw = (
  standardClasses: SXClass | undefined,
  classes: SXClass | undefined,
  replacementColor?: string
) => {
  //Determine Base Classes
  let baseClasses = "";
  if (typeof standardClasses === "string") {
    baseClasses = standardClasses;
  } else {
    if (standardClasses?.replace) {
      baseClasses = standardClasses.replace;
    }
    if (standardClasses?.add) {
      baseClasses = standardClasses.add;
    }
  }

  //Determine Instance Classes
  if (typeof classes === "string") {
    if (standardClasses === classes)
      return replaceColor(standardClasses, replacementColor);
    if (classes) return `${standardClasses} TWUI-Custom ${classes}`;
    return replaceColor(baseClasses, replacementColor);
  }
  if (classes?.replace) {
    return replaceColor(`TWUI-Custom ${classes.replace}`, replacementColor);
  }
  let modifiedClasses = baseClasses;
  if (classes?.remove) {
    modifiedClasses = removeClasses(baseClasses, classes.remove);
  }
  if (classes?.add) {
    modifiedClasses = modifiedClasses + " TWUI-Custom " + classes.add;
  }
  return replaceColor(modifiedClasses, replacementColor);
};
