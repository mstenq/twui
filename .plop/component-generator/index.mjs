import { addComponentFiles } from "./steps/addComponentFiles.mjs";
import { updateThemeTypes } from "./steps/updateThemeTypes.mjs";
import { updateComponentIndex } from "./steps/updateComponentIndex.mjs";
import { hasNumbers, hasSpaces, isNotPascalCase } from "./validators.mjs";

export const componentGenerator = {
  description: "Creates new component",
  prompts: [
    {
      name: "component_name",
      type: "input",
      message: "What is the component name? Should be singular and PascalCase",
      validate: (value) => {
        if (hasSpaces(value)) return "value cannot include spaces.";
        if (isNotPascalCase(value)) return "value must be in PascalCase";
        if (hasNumbers(value)) return "value must not have numbers";
        return true;
      },
    },
    {
      name: "confirm",
      type: "confirm",
      message: (
        data
      ) => `You are about to create a new module (${data.component_name}).      
      Proceed?`,
    },
  ],
  actions: (data) => {
    console.log(data);
    if (!data.confirm) {
      return ["Component generation cancelled"];
    }

    return [addComponentFiles(), updateComponentIndex(), updateThemeTypes()];
  },
};
