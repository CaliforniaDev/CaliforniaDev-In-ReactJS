import { palette } from "../palette";
export const createGradient = (opacity1, opacity2) => {
  return `linear-gradient(0deg, rgba(159, 202, 255, ${opacity1}), rgba(159, 202, 255, ${opacity2})), ${palette.surface}`;
};
