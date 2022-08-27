import { schema } from "../../src/models/schema.js";



export const camelCase = (value) => {
  return value[0].toLowerCase() + value.substring(1, value.length);
};

export const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const getModuleFieldNames = (data) => {
  const model = schema.models[data.module_name];
  return Object.values(model.fields);
};

export const getModulePluralName = (data) => {
  const model = schema.models[data.module_name];
  return model.pluralName;
};


export const getAlternateCasingsFromPascal = (value) => ({
  upper: value.toUpperCase(),
  lower: value.toLowerCase(),
  camel: camelCase(value),
  kebab: kebabCase(value),
  pascal: value
})