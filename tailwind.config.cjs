/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "acid"
      // "retro",
      // "emerald",
    //   {
    //     listCustom: {
    //       primary: "#bc942d",

    //       secondary: "#339b18",

    //       accent: "#60b731",

    //       neutral: "#1B212C",

    //       "base-100": "#F9FAFB",

    //       info: "#82E4F7",

    //       success: "#53E4BD",

    //       warning: "#EED358",

    //       error: "#F72269",
    //     },
    //     darkCustom: {
    //       primary: "#ff6893",

    //       secondary: "#fccac4",

    //       accent: "#81f4dd",

    //       neutral: "#292839",

    //       "base-100": "#2A304C",

    //       info: "#64D2F7",

    //       success: "#2AB79B",

    //       warning: "#F6B80E",

    //       error: "#F35E63",
    //     },
    //   },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("daisyui")],
};
