/**
 * * Change color swatches from these constants
 */
const primary = "#006699"; //BLUE
const onPrimary = "#f7f7f7";

const secondary = "#FFCC66"; // YELLOW
const onSecondary = "#444444";
const onSecondaryVarient = "#006699"; //BLUE

const tertiary = "#FF6666"; //RED




const theme = {
  color: {
    primary: primary,
    onPrimary: onPrimary,
    secondary: secondary,
    onSecondary: onSecondary,
    onSecondaryVarient: onSecondaryVarient,
    tertiary: tertiary,

    inverse: {
      primary: onPrimary,
      onPrimary: primary,
    },
  },

  shadow: {
    primary: "0px 6px 8px rgba(0, 0, 0, 0.30)",
    primaryHover: "0px 3px 6px rgba(0, 0, 0, .6)",
  },
  transition: {
    primary: "0.3s",
  },
};

export default theme;
