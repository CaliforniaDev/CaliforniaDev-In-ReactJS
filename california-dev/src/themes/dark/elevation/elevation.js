import {createGradient} from "../utils/createGradient";

export const elevation = {
  level1: {
    surfaceColor: createGradient(0.05, 0.05),
    shadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);",
  },
  level2: {
    surfaceColor: createGradient(0.08, 0.08),
    shadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  },
  level3: {
    surfaceColor: createGradient(0.12, 0.11),
    shadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
  },
  level4: {
    surfaceColor: createGradient(0.12, 0.12),
    shadow: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
  },
  level5: {
    surfaceColor: createGradient(0.14, 0.14),
    shadow: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
  },
}