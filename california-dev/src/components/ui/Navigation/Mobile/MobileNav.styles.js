import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { hexToRgba } from 'themes/utils/hexToRgba';

export const Nav = styled(motion.nav)(({
  theme: { palette, elevation, typography },
}) => {
  const NAV_BG = hexToRgba(palette.surface, 0.8); // Default navigation background
  const CONTENT_COLOR = palette.onSurface; // Default text color

  return css`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    min-width: 80px;
    padding: 2rem 2.4rem;
    color: ${CONTENT_COLOR};
    background-color: ${NAV_BG};
    box-shadow: ${elevation.level1};
    overflow: hidden;

    transition:
      background-color 0.3s ease,
      opacity 0.3s ease,
      box-shadow 0.3s ease-in-out;

    // Styling for fixed navigation bar at the top of the viewport
    &.fixed {
      position: fixed;
      z-index: 2;
      top: 0;
      right: 0;
      width: 100%;
    }

    // Hover effect on icons in top navigation bar
    .target-area {
      &:hover {
        svg path {
          stroke: ${palette.primary};
        }
      }
    }
    .logo-wrapper {
      z-index: 1;
    }
    .nav__logo {
      min-width: 3.8rem;
      min-height: 4rem;
    }

    .nav-menu {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      padding: 80px 0 0 24px;

      background-color: ${NAV_BG};
      backdrop-filter: blur(10px); /* Blur the background */
      transform: translateZ(0); /* Trigger a repaint for Safari */
      -webkit-backdrop-filter: blur(10px); /* Safari 9.0 and up */
    }

    ul,
    li {
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      list-style: none;
      ${typography.display.medium};
      cursor: pointer;

      &:hover {
        color: ${palette.primary};
      }
    }
  `;
});

// Styled button for the menu toggle in navigation bar
export const MenuToggle = styled.button(({ theme: { palette } }) => {
  return css`
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;

    // Styling for SVG path in the toggle button
    svg path {
      transition: stroke 0.3s ease;
      stroke: ${palette.onSecondaryContainer};
    }
  `;
});
// Styled area for target interaction in navigation bar
export const TargetArea = styled.div(({ theme: { palette } }) => {
  return css`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
  `;
});

// Styled button for toggling the theme (dark/light mode)
export const ThemeButton = styled(motion.button)(({
  theme: { palette, mode },
}) => {
  const CONTENT_COLOR = palette.onSecondaryContainer;
  return css`
    width: 64px;
    height: 64px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    outline-color: transparent;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${CONTENT_COLOR};
    background-color: transparent;
    z-index: 1;

    cursor: pointer;
    overflow: hidden;

    svg path {
      fill: ${CONTENT_COLOR};
    }

    nav & {
      bottom: 16px;
      right: 16px;
    }
    .theme-icon {
      position: absolute;
      transition:
        opacity 0.3s ease-in-out,
        transform 0.3s cubic-bezier(0.2, 0, 0, 1);
      opacity: 0;
      svg path {
        fill: ${CONTENT_COLOR};
      }
    }
    // Dynamic styles for sun/moon icons based on theme mode
    .theme-icon.sun {
      // Sun icon visibility in dark mode
      transform: ${mode === 'dark' ? 'translateY(0)' : 'translateY(48px)'};
      opacity: ${mode === 'dark' ? 1 : 0};
    }
    .theme-icon.moon {
      // Moon icon visibility in light mode
      transform: ${mode === 'light' ? 'translateY(0)' : 'translateY(-48px)'};
      opacity: ${mode === 'light' ? 1 : 0};
    }

    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
  `;
});


