// Import the color palette for the theme
import { palette } from '../palette';
// Import the generateStateLayers utility function
import { generateStateLayers } from 'themes/utils/generateStateLayers';
// Import the STATE and OPACITY configurations
import { STATE_TYPE, OPACITY } from 'themes/utils/stateConfig';

/**
 * The state configuration for the theme, generated using the color palette.
 * @type {Object}
 */

const state = generateStateLayers(palette, STATE_TYPE, OPACITY);

export { state };
