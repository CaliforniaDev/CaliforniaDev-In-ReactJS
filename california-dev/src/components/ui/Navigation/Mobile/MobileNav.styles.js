import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { hexToRgba } from 'themes/utils/hexToRgba';

// Styled navigation bar with dynamic styles based on navigation type (FAB or top-nav)
export const Nav = styled(motion.nav)(({
  $isFab, // Determines if navigation is in FAB style
  theme: { palette, elevation, typography },
}) => {
  // Define default and FAB-specific colors
  const NAV_BG = hexToRgba(palette.surface, 0.8); // Default navigation background
  const CONTENT_COLOR = palette.onSurface; // Default text color
  const FAB_BG = hexToRgba(palette.secondaryContainer, 0.8); // FAB background color
  const FAB_CONTENT_COLOR = palette.onSecondaryContainer; // FAB text color
  const STATE_COLOR = palette.onSecondaryContainer; // State layer color for pseudo states

  // Determine menu background color based on FAB state
  const MENU_BG = $isFab ? hexToRgba(palette.secondaryContainer, 0.8) : NAV_BG;

  return css`
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
      z-index: 1;
      top: 0;
      right: 0;
      width: 100%;
    }

    // Styling for FAB navigation bar
    &.fab {
      position: fixed;
      top: unset;
      right: 16px;
      bottom: 16px;
      z-index: 2;

      display: flex;
      width: 80px;
      height: 80px;
      align-items: center;
      justify-content: center;

      border-radius: 12px;
      color: ${FAB_CONTENT_COLOR};
      background-color: ${FAB_BG};

      box-shadow: ${elevation.level3};
      .menu-toggle {
        left: 0;
        right: 0;
      }

      // Clickable area for MenuToggle
      .target-area {
        background-color: ${FAB_BG};
      }

      .state-layer {
        border-radius: inherit;
        background-color: ${STATE_COLOR};
      }
      &:hover {
        box-shadow: ${elevation.level4};
      }
      &:focus-visible {
        box-shadow: ${elevation.level3};
      }
      &:active {
        box-shadow: ${elevation.level3};
      }
    }

    // Hover effect on icons in top navigation bar
    &.top-nav > .target-area {
      &:hover {
        svg path {
          stroke: ${palette.primary};
        }
      }
    }

    .nav__logo {
      min-width: 3.8rem;
      min-height: 4rem;
    }

    .nav-menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: -1;

      display: flex;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      padding: 80px 0 0 24px;

      background-color: ${MENU_BG};
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
export const MenuToggle = styled(motion.button)(({ theme: { palette } }) => {
  return css`
    position: absolute;
    right: 0;
    left: 0;
    z-index: 100;

    display: flex;
    min-width: 40px;
    min-height: 40px;
    justify-content: center;
    align-items: center;

    border: none;
    outline: none;
    background: transparent;

    cursor: pointer;
    pointer-events: none;

    // Styling for SVG path in the toggle button
    svg path {
      transition: stroke 0.3s ease;
      stroke: ${palette.onSecondaryContainer};
    }
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

    .top-nav & {
      bottom: 16px;
      right: 16px;
    }
    .fab & {
      bottom: 112px;
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

// Styled area for target interaction in navigation bar
export const TargetArea = styled.div(({ theme: { palette } }) => {
  return css`
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;

    display: flex;
    width: 80px;
    height: 80px;
    min-width: 80px;
    min-height: 80px;
    justify-content: center;
    align-items: center;

    border-radius: 12px;

    cursor: pointer;
    overflow: hidden;
  `;
});
