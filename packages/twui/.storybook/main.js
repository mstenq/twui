const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.story.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // Resolve error when webpack-ing storybook:
    // Can't import the named export 'Children' from non EcmaScript module (only
    // default export is available)
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
};
