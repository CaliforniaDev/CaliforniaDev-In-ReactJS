import {createGradient} from "./createGradient";

export const elevation = {
  level1: {
    surfaceColor: createGradient(0.05, 0.05),
    shadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3);",
  },
  level2: {
    surfaceColor: createGradient(0.08, 0.08),
    shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  level3: {
    surfaceColor: createGradient(0.12, 0.11),
    shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  level4: {
    surfaceColor: createGradient(0.12, 0.12),
    shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  level5: {
    surfaceColor: createGradient(0.14, 0.14),
    shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
}