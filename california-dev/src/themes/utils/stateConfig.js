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

