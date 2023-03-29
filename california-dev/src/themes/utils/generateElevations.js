import { css } from "styled-components";
import { hexToRgba } from "./hexToRgba";

// Utility function: Generate CSS for the background style using the provided surface, surfaceTint, and levelOpacity
const generateSurfaceStyles = (surface, surfaceTint, levelOpacity) => {
  // Convert the surface tint to an RGBA value
  const rgbaSurfaceTint = hexToRgba(surfaceTint, levelOpacity);

  // Return the background styles
  return css`
    background: linear-gradient(0deg, ${rgbaSurfaceTint}, ${rgbaSurfaceTint}),
      ${surface};
  `;
};

// Utility function: Generate CSS for the box-shadow style using the provided shadow and level
const generateBoxShadowStyles = (shadow, level) => {
  return css`
    // Generate CSS for box-shadow using the provided shadow and level
    box-shadow: ${shadow[level]};
  `;
};

// Main export function: Generate elevation styles for 
//both surfaces and shadows using the provided palette, levels, opacity, and shadow
function generateElevations({ surface, surfaceTint }, levels, opacity, shadow) {
  // Extract the elevation levels from the levels object
  const elevationLevels = Object.values(levels);

  // Generate the surface and shadow styles for each level
  return elevationLevels.reduce(
    (elevations, level) => {
      // Extract the opacity for the current level
      const levelOpacity = opacity[level];

      // Generate the surface styles for the current level
      elevations.surface[level] = generateSurfaceStyles(
        surface,
        surfaceTint,
        levelOpacity
      );
      // Generate the shadow styles for the current level
      elevations.shadow[level] = generateBoxShadowStyles(shadow, level);

      return elevations;
    },
    {
      // Initialize the elevations object with empty objects for the surface and shadow styles
      surface: {},
      shadow: {},
    }
  );
}

export { generateElevations };
