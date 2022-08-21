const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = plugin(
  ({ addVariant }) => {
    addVariant("has-error", '&[data-has-error="true"]');
    addVariant("has-text", '&[data-has-text="true"]');
    addVariant("is-disabled", '&[data-is-disabled="true"]');
    addVariant("is-readonly", '&[data-is-readonly="true"]');
  },
  {
    theme: {
      extend: {
        colors: {
          primary: colors.cyan,
          error: colors.rose,
        },
      },
    },
  }
);
