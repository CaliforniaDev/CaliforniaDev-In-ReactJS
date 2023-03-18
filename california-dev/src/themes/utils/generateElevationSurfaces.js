import { css } from "styled-components";
import { hexToRgba } from "./hexToRgba";

function generateElevationSurfaces(
  { surface, surfaceTint },
  levels,
  opacity,
  shadow
) {
  const elevationLevels = Object.values(levels);
  return elevationLevels.reduce((elevations, level) => {
    const levelOpacity = opacity[level];
    const rgbSurfaceTint = hexToRgba(surfaceTint, levelOpacity);
    elevations[level] = css`
    background: linear-gradient(0deg, ${rgbSurfaceTint}, ${rgbSurfaceTint}),
      ${surface};
      box-shadow: ${shadow[level]};
    `;
    return elevations;
  }, {})
  // return (const level of elevationLevels) {
  //   const levelOpacity = opacity[level];
  //   const rgbSurfaceTint = hexToRgba(surfaceTint, levelOpacity);
  //   elevations[level] = css`
  //     background: linear-gradient(0deg, ${rgbSurfaceTint}, ${rgbSurfaceTint}),
  //       ${surface};
  //     box-shadow: ${shadow[level]};
  //   `;
  // }
}
export { generateElevationSurfaces };

