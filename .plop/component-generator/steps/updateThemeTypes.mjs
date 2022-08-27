import path from "path";

const IMPORT_MARKER = `} from "@/components";`
const SETUP_MARKER = `export type Theme = {`

export const updateThemeTypes = () => {
  return {
    type: "modify",
    path: path.join(process.cwd(), `/packages/twui/src/theme/ThemeType.tsx`),
    transform: (content, data) => {
      const importString = `${data.component_name}Theme,`;
      const setupString = `${data.component_name}?: ${data.component_name}Theme;`;

      //Prevent multiple adds
      if (content.indexOf(importString) > 0) {
        return content;
      }
      if (content.indexOf(setupString) > 0) {
        return content;
      }

      // Update Content
      let updatedContent = content.replace(IMPORT_MARKER, `${importString}\n${IMPORT_MARKER}`);

      updatedContent = updatedContent.replace(SETUP_MARKER, `${SETUP_MARKER}\n${setupString}`);

      return updatedContent;
    },
  };
};
