import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDiv = styled(motion.div)(({
  theme: { palette, typography, media },
}) => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    padding: 24px;

    background-color: ${palette.surface};
    ${typography.display.large}

    // Main container styles
    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 40%;
    }
    // Styles for the first row
    .row-1 .bear svg {
      width: 30%;
      margin-inline: auto;
    }

    // Styles for the second row
    .row-2 {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 10px;
    }
    .row-2 .svg-wrapper svg {
      height: 100%;
      width: 100%;
    }

    // Styles for sliding animation container
    .slideInDiv {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: ${palette.secondary};
    }

    @media (min-width: ${media.device.tabletSmall}) {
      align-items: center; // Center alignment on larger screens
      .container {
        margin-top: 0%; // Remove top margin for larger screens
      }
    }
  `;
});
