import { css } from "styled-components";
import { hexToRgba } from "./hexToRgba";

// These utility functions generate CSS for background and box-shadow styles
const generateSurfaceStyles = (surface, surfaceTint, levelOpacity) => {
  const rgbaSurfaceTint = hexToRgba(surfaceTint, levelOpacity);
  return css`
    background: linear-gradient(0deg, ${rgbaSurfaceTint}, ${rgbaSurfaceTint}),
      ${surface};
  `;
};

const generateBoxShadowStyles = (shadow, level) => {
  return css`
    box-shadow: ${shadow[level]};
  `;
};

// This function generates elevation styles for surfaces and shadows
function generateElevations({ surface, surfaceTint }, levels, opacity, shadow) {
  const elevationLevels = Object.values(levels);

  // The reduce function builds an elevations object, containing surface and shadow styles for each elevation level
  return elevationLevels.reduce(
    (elevations, level) => {
      const levelOpacity = opacity[level];
      elevations.surface[level] = generateSurfaceStyles(
        surface,
        surfaceTint,
        levelOpacity
      );
      elevations.shadow[level] = generateBoxShadowStyles(shadow, level);

      return elevations;
    },
    {
      surface: {},
      shadow: {},
    }
  );
}

export { generateElevations };
