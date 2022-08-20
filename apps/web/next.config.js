const withTM = require("next-transpile-modules")(["ui", "twui"]);

module.exports = withTM({
  reactStrictMode: true,
});
