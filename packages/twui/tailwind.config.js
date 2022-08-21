const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx,ts,tsx}"],
  plugins: [require("./plugin")],
  corePlugins: {
    preflight: true,
  },
};
