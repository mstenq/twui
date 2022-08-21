const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = plugin(
  ({ addVariant }) => {
    addVariant("is-xs", '&[data-size="xs"]');
    addVariant("is-sm", '&[data-size="sm"]');
    addVariant("is-md", '&[data-size="md"]');
    addVariant("is-lg", '&[data-size="lg"]');
    addVariant("is-xl", '&[data-size="xl"]');
    addVariant("has-error", '&[data-has-error="true"]');
    addVariant("has-text", '&[data-has-text="true"]');
    addVariant("has-startadornment", '&[data-has-startadornment="true"]');
    addVariant("has-endadornment", '&[data-has-endadornment="true"]');
    addVariant("is-disabled", '&[data-is-disabled="true"]');
    addVariant("is-readonly", '&[data-is-readonly="true"]');
  },
  {
    theme: {
      extend: {
        colors: {
          primary: colors.violet,
          secondary: colors.sky,
          error: colors.rose,
          nuetral: colors.slate,
        },
      },
    },
  }
);
