import { css } from "styled-components";
import { palette } from "../palette";
import { hexToRgba } from "../utils/hexToRgba";

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

function generateElevationSurfaces({ surface, surfaceTint }) {
  const elevations = {};
  const elevationLevels = Object.values(LEVELS);

  for (const level of elevationLevels) {
    const opacity = OPACITY[level];
    const rgbSurfaceTint = hexToRgba(surfaceTint, opacity);
    elevations[level] = css`
      background: linear-gradient(0deg, ${rgbSurfaceTint}, ${rgbSurfaceTint}),
        ${surface};
      box-shadow: ${SHADOW[level]};
    `;
  }
  return elevations;
}
export const elevation = generateElevationSurfaces(palette);