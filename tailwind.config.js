/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        stix: ['STIX Two Text', 'serif'],
      },
      colors: {
        purewhite: "#FFFFFF",
        grey: "#2C374F",
        lightgrey: "#cfcfcf",
        blue: "#084DF2",
        lightblue: "#E8EEFD",
        darkblue: "#002577",
        rosepink: "#FF204E",
        mustardyellow: "#FFC94A",
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require("@pyncz/tailwind-mask-image"),
  ],
};
