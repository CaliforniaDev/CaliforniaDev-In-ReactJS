import { hexToRgba } from "./hexToRgba";


/**
 * Generates state layers for a given color palette.
 * @param {Object} palette - The color palette object.
 * @param {Object} stateTypes - The object defining different state types.
 * @param {Object} opacity - The object defining opacity values for each state type.
 * @returns {Object} - The state layers object containing state layers for each color in the palette.
 */

function generateStateLayers(palette, STATE, OPACITY) {
  const stateTypes = Object.values(STATE);
  return Object.entries(palette).reduce((stateLayers, [colorRole, colorValue]) => {
    const colorStateLayers = stateTypes.reduce((colorLayers, stateType) => {
      const opacity = OPACITY[stateType];
      colorLayers[stateType] = hexToRgba(colorValue, opacity);
      return colorLayers;
    }, {});
    stateLayers[colorRole] = colorStateLayers;
    return stateLayers;
  }, {});
}

export { generateStateLayers };