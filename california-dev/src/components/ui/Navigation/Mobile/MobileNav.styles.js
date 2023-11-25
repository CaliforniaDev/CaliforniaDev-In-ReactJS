import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { hexToRgba } from 'themes/utils/hexToRgba';

export const Nav = styled(motion.nav)(({
  $isFab,
  theme: { palette, elevation, typography },
}) => {
  const NAV_BG = hexToRgba(palette.surface, 0.8); /** Default background */
  const CONTENT_COLOR = palette.onSurface;
  const MENU_BG = $isFab ? hexToRgba(palette.secondaryContainer, 0.8) : NAV_BG;
  const FAB_BG = hexToRgba(palette.secondaryContainer, 0.8);
  const FAB_CONTENT_COLOR = palette.onSecondaryContainer;
  const STATE_COLOR = palette.onSecondaryContainer;
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

    &.fixed {
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      width: 100%;
    }

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
    svg path {
      transition: stroke 0.3s ease;
      stroke: ${palette.onSecondaryContainer};
    }
  `;
});

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

    /* background-color: ${palette.tertiary}; */
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

    .theme-icon.sun {
      // if mode is dark, then sun is visible
      transform: ${mode === 'dark' ? 'translateY(0)' : 'translateY(48px)'};
      opacity: ${mode === 'dark' ? 1 : 0};
    }
    .theme-icon.moon {
      // if mode is light, then moon is visible
      transform: ${mode === 'light' ? 'translateY(0)' : 'translateY(-48px)'};
      opacity: ${mode === 'light' ? 1 : 0};
    }

    .state-layer {
      background-color: ${CONTENT_COLOR};
    }
  `;
});

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

// .menu-background {
//   position: fixed;
//   display: flex;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 100vw;
//   opacity: 1;
//   background-color: ${BG};
//   backdrop-filter: blur(10px);
//   transform: translateZ(0);
//   -webkit-backdrop-filter: blur(10px);
// }
