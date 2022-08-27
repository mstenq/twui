import path from "path";

const IMPORT_MARKER = `} from "@/components";`
const SETUP_MARKER = `export type Theme = {`

export const updateComponentIndex = () => {
  return {
    type: "modify",
    path: path.join(process.cwd(), `/packages/twui/src/theme/ThemeType.tsx`),
    transform: (content, data) => {
      const importString = `${data.component_name}Theme,`;
      const setupString = `${data.component_name}?: ${data.component_name}Theme;`;

      //Prevent multiple adds
      const existingIndex = content.indexOf(importString);
      if (existingIndex > 0) {
        return content;
      }

      // Update Content
      let updatedContent = content.replace(IMPORT_MARKER, `
        ${importString}";
        ${IMPORT_MARKER}`);

      updatedContent = updatedContent.replace(SETUP_MARKER, `
        ${SETUP_MARKER}";
        ${setupString}`);

      return updatedContent;
    },
  };
};
