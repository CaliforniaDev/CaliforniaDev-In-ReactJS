import { palette } from "../palette";
import { generateElevationSurfaces } from "themes/utils/generateElevationSurfaces";

// Defines different elevation levels and their corresponding opacity values
const LEVELS = {
  LVL1: "level1",
  LVL2: "level2",
  LVL3: "level3",
  LVL4: "level4",
  LVL5: "level5",
};
const OPACITY = {
  [LEVELS.LVL1]: 0.05,
  [LEVELS.LVL2]: 0.08,
  [LEVELS.LVL3]: 0.11,
  [LEVELS.LVL4]: 0.12,
  [LEVELS.LVL5]: 0.14,
};
// Defines different shadow values for each elevation level
const SHADOW = {
  [LEVELS.LVL1]:
    "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  [LEVELS.LVL2]:
    "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
  [LEVELS.LVL3]:
    "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
  [LEVELS.LVL4]:
    "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
  [LEVELS.LVL5]:
    "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
};
export const elevation = generateElevationSurfaces(palette, LEVELS, OPACITY, SHADOW);