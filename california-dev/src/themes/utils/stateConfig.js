import { css } from "styled-components";
// Define the different state types
export const STATE_TYPE = {
  HOVER: "hover",
  FOCUS: "focus",
  PRESSED: "pressed",
  DRAGGED: "dragged",
};

// Define the opacity values for each state type
export const OPACITY = {
  [STATE_TYPE.HOVER]: 0.08,
  [STATE_TYPE.FOCUS]: 0.12,
  [STATE_TYPE.PRESSED]: 0.12,
  [STATE_TYPE.DRAGGED]: 0.16,
};

/**
 * Generate a CSS overlay for a given state layer value.
 * @param {string} stateLayerValue - The value for the state layer.
 * @returns {Object} - The CSS rule for the overlay.
 */
export const generateCssOverlay = (stateLayerValue) => {
  return css`
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${stateLayerValue};
      border-radius: inherit;
      z-index: -1;
      transition: background-color 0.2s ease-in-out;
    }
  `;
};
