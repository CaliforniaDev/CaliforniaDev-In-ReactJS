

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
    surfaces: {
      surface1: {
        gradient: this.createGradient(0.05, 0.05),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface2: {
        gradient: this.createGradient(0.08, 0.08),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface3: {
        gradient: this.createGradient(0.12, 0.11),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface4: {
        gradient: this.createGradient(0.12, 0.12),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface5: {
        gradient: this.createGradient(0.14, 0.14),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      createGradient(opacity1, opacity2) {
        return `linear-gradient(0deg, rgba(0, 97, 165, ${opacity1}), rgba(0, 97, 165, ${opacity2})), ${this.palette.surface}`;
      },
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
    surfaces: {
      surface1: {
        gradient: this.createGradient(0.05, 0.05),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface2: {
        gradient: this.createGradient(0.08, 0.08),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface3: {
        gradient: this.createGradient(0.12, 0.11),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface4: {
        gradient: this.createGradient(0.12, 0.12),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      surface5: {
        gradient: this.createGradient(0.14, 0.14),
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      createGradient(opacity1, opacity2) {
        return `linear-gradient(0deg, rgba(159, 202, 255, ${opacity1}), rgba(159, 202, 255, ${opacity2})), ${this.palette.surface}`;
      },
    },
  },
};

export default theme;
