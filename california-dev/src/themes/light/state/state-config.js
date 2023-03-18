// Import the color palette for the theme
import { palette } from "../palette";
// Import the generateStateLayers utility function
import { generateStateLayers } from "themes/utils/generateStateLayers";
// Import the STATE and OPACITY configurations
import { STATE, OPACITY } from "themes/utils/stateConfig";

/**
 * The state configuration for the theme, generated using the color palette.
 * @type {Object}
 */
export const state = generateStateLayers(palette, STATE, OPACITY);
