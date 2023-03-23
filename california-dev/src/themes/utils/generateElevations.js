import { css } from "styled-components";
import { hexToRgba } from "./hexToRgba";

// Utility function: Generate CSS for the background style using the provided surface, surfaceTint, and levelOpacity
const generateSurfaceStyles = (surface, surfaceTint, levelOpacity) => {
  const rgbaSurfaceTint = hexToRgba(surfaceTint, levelOpacity);
  return css`
    background: linear-gradient(0deg, ${rgbaSurfaceTint}, ${rgbaSurfaceTint}),
      ${surface};
  `;
};

// Utility function: Generate CSS for the box-shadow style using the provided shadow and level
const generateBoxShadowStyles = (shadow, level) => {
  return css`
    box-shadow: ${shadow[level]};
  `;
};

// Main export function: Generate elevation styles for 
//both surfaces and shadows using the provided palette, levels, opacity, and shadow
function generateElevations({ surface, surfaceTint }, levels, opacity, shadow) {
  const elevationLevels = Object.values(levels);

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
