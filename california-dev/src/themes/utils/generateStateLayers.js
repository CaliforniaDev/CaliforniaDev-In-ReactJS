import { hexToRgba } from "./hexToRgba";

/**
 * Generates state layers for a given color palette.
 * @param {Object} palette - The color palette object.
 * @param {Object} stateTypes - The object defining different state types.
 * @param {Object} opacity - The object defining opacity values for each state type.
 * @param {Function} cssOverlay - The CSS overlay generator function.
 * @returns {Object} - The state layers object containing state layers for each color in the palette.
 */

function generateStateLayers(palette, stateTypes, opacity, cssOverlay) {
  // Get an array of the state types
  const stateTypeList = Object.values(stateTypes);

  // Iterate over each color in the palette
  return Object.entries(palette).reduce(
    (stateLayers, [colorRole, colorValue]) => {
      // Generate state layers for each state type for this color
      const colorStateLayers = stateTypeList.reduce(
        (colorLayers, stateType) => {
          // Get the opacity for this state type
          const stateTypeOpacity = opacity[stateType];

          // Generate the CSS overlay for this state layer value
          const stateLayerValue = hexToRgba(colorValue, stateTypeOpacity);
          const cssRule = cssOverlay(stateLayerValue);

          // Add the CSS rule to the state layers object
          colorLayers[stateType] = cssRule;
          return colorLayers;
        },
        {}
      );

      // Add the state layers for this color to the state layers object
      stateLayers[colorRole] = colorStateLayers;
      return stateLayers;
    },
    {}
  );
}
export { generateStateLayers };
