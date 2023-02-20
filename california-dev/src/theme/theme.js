const SURFACE_LAYER_1 = `linear-gradient(0deg, rgba(0, 97, 165, 0.05), rgba(0, 97, 165, 0.05)),`; // Elevation lvl 1
const SURFACE_LAYER_2 = `linear-gradient(0deg, rgba(0, 97, 165, 0.08), rgba(0, 97, 165, 0.08)),`; // Elevation lvl 2
const SURFACE_LAYER_3 = `linear-gradient(0deg, rgba(0, 97, 165, 0.12), rgba(0, 97, 165, 0.11)),`; // Elevation lvl 3
const SURFACE_LAYER_4 = `linear-gradient(0deg, rgba(0, 97, 165, 0.12), rgba(0, 97, 165, 0.12)),`; // Elevation lvl 4
const SURFACE_LAYER_5 = `linear-gradient(0deg, rgba(0, 97, 165, 0.14), rgba(0, 97, 165, 0.14)),`; // Elevation lvl 5

const theme = {
  light: {
    palette: {
      primary: "#0061A5",
      onPrimary: "#ffffff",
      primaryContainer: "#D2E4FF",
      onPrimaryContainer: "#001D36",

      secondary: "#B8006D",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#FFD9E4",
      onSecondaryContainer: "#3E0021",

      tertiary: "#6B5778",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#F3DAFF",
      onTertiaryContainer: "#251431",

      error: "#BA1A1A",
      onError: "#FFFFFF",
      errorContainer: "#FFDAD6",
      onErrorContainer: "#410002",

      background: "#FDFCFF",
      onBackground: "#1A1C1E",
      surface: "#FDFCFF",
      onSurface: "#1A1C1E",

      surfaceVariant: "#DFE2EB",
      onSurfaceVariant: "#43474E",
      outline: "#43474E",
    },
  },

  dark: {
    palette: {
      primary: "#9FCAFF",
      onPrimary: "#003259",
      primaryContainer: "#00497E",
      onPrimaryContainer: "#D2E4FF",

      secondary: "#FFB0CD",
      onSecondary: "#640039",
      secondaryContainer: "#8D0052",
      onSecondaryContainer: "#FFD9E4",

      tertiary: "#D7BEE4",
      onTertiary: "#3B2947",
      tertiaryContainer: "#523F5F",
      onTertiaryContainer: "#F3DAFF",

      background: "#1A1C1E",
      onBackground: "#E2E2E6",
      surface: "#1A1C1E",
      onSurface: "#E2E2E6",

      surfaceVariant: "#43474E",
      onSurfaceVariant: "#C3C6CF",
      outline: "#8D9199",
    },
  },

  surfaces: {
    light: {
      surface1: `${SURFACE_LAYER_1} #FDFCFF`,
      surface2: `${SURFACE_LAYER_2} #FDFCFF`,
      surface3: `${SURFACE_LAYER_3} #FDFCFF`,
      surface4: `${SURFACE_LAYER_4} #FDFCFF`,
      surface5: `${SURFACE_LAYER_5} #FDFCFF`
    },
  },
};
console.log(theme);
export default theme;
