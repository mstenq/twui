var globSync = require("glob").sync;
const fs = require("fs");
const colors = require("../src/theme/colors");

const results = globSync("**/*.variants.tsx", {
  nocase: true,
  strict: false,
  debug: false,
});

let data = "";
results.forEach((file) => {
  data = data + " " + fs.readFileSync(file, "utf8");
});

const listOfClasses = data.match(/\S*-primary-[1234567890\/]*/gi);
const uniqueClasses = [...new Set(listOfClasses)];

const completeClassList = [];

colors.forEach((color) => {
  uniqueClasses.forEach((className) => {
    completeClassList.push(className.replace("-primary-", `-${color}-`));
  });
});

const dataToWrite = `// This file is auto generated, do not edit it
  export const colorClasses = ${JSON.stringify(completeClassList)};
`;

fs.writeFileSync("./src/theme/colorClasses.ts", dataToWrite);
