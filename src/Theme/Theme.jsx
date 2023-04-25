// import type { Theme } from "theme-ui";
const Theme = {
  initialColorMode: "light",
  colors: {
    text: "black",
    background: " hsl(0, 0%, 98%)",
    primary: " #fff;",
    inverseText: "black",
    modes: {
      dark: {
        text: "white",
        background: "hsl(207, 26%, 17%)",
        primary: "hsl(209, 23%, 22%)",
        inverseText: "#fff",
      },
      back: {
        color: " hsl(209, 23%, 22%)", // use the page background color for an inverted effect
        background: "primary",
      },
      papaya: {
        // this color mode will fallback to the root color object
        // for values not defined here
        text: "#433",
        background: "papayawhip",
      },
    },
  },
};

export default Theme;
