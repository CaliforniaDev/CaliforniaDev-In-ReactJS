import { palette } from "../palette";
export const createGradient = (opacity1, opacity2) => {
  return `linear-gradient(0deg, rgba(0, 97, 165, ${opacity1}), rgba(0, 97, 165, ${opacity2})), ${palette.surface}`;
};
