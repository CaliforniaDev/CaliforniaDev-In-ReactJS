/**
 * * Change color swatches from these constants
 */
const primary = "#006699";
const onPrimary = "#fff";

const secondary = "#FFCC66";
const onSecondary =  "#444444";
const onSecondaryVarient = "#006699";

const tertiary = "#FF6666";


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
    button: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
};

export default theme;
