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
    addVariant("is-disabled", [
      '&[data-is-disabled="true"]',
      "&[data-disabled]",
    ]);
    addVariant("is-readonly", '&[data-is-readonly="true"]');
    addVariant("is-open", ['&[data-state="open"]', '[data-state="open"] &']);
    addVariant("is-closed", [
      '&[data-state="closed"]',
      '[data-state="closed"] &',
    ]);
  },
  {
    theme: {
      extend: {
        colors: {
          neutral: colors.neutral,
          primary: colors.violet,
          secondary: colors.sky,
          tertiary: colors.cyan,
          error: colors.rose,
          warning: colors.yellow,
          info: colors.blue,
          success: colors.green,
        },
        keyframes: {
          grow: {
            "0%": { height: 0 },
            "100%": { height: "var(--radix-collapsible-content-height)" },
          },
          shrink: {
            "0%": { height: "var(--radix-collapsible-content-height)" },
            "100%": { height: 0 },
          },
        },
        animation: {
          grow: "grow 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          shrink: "shrink 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        },
      },
    },
  }
);
