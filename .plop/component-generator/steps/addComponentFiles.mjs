import path from "path";

export const addComponentFiles = () => ({
  type: "addMany",
  destination: path.join(
    process.cwd(),
    `/packages/twui/src/components/{{component_name}}`
  ),
  base: "component-generator/plop-templates/component/",
  templateFiles: ["component-generator/plop-templates/component/**/*.hbs"],
  force: false, //Overwrite during testing
});
