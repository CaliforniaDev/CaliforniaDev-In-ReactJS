// Define the different state types
export const STATE = {
  HOVER: "hover",
  FOCUS: "focus",
  PRESSED: "pressed",
  DRAGGED: "dragged",
};

// Define the opacity values for each state type
export const OPACITY = {
  [STATE.HOVER]: 0.08,
  [STATE.FOCUS]: 0.12,
  [STATE.PRESSED]: 0.12,
  [STATE.DRAGGED]: 0.16,
};
