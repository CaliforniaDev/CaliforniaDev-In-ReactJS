import styled, { css } from "styled-components";

export const Nav = styled.nav(({ theme: { palette, media } }) => {
  return css`
    display: none;

    ${media.TABLET`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 8rem;
      max-width: 8rem;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${palette.surface};
      border: 1px solid ${palette.border};
      z-index: 1;
    `}
  `;
});

export const NavList = styled.ul(({ theme: { palette } }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;
});

export const NavItem = styled.li(
  ({ theme: { palette, state }, isActive, isPressed }) => {
    return css`
      position: relative;
      display: flex;
      width: 4.8rem;
      height: 4.8rem;
      justify-content: center;
      align-items: center;
      outline: none;

      &:hover .nav-icon,
      &:focus-visible .nav-icon {
        transform: scale(1.1);
        ${isPressed && "transform: scale(0.9);"}
      }

      .nav-icon {
        transition: transform 0.2s ease-in-out;
      }

      .nav-icon path {
        fill: ${isActive
          ? palette.onSecondaryContainer
          : palette.onSurfaceVariant};
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: scale(0);
        transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
      }

      /* Hover */
      &:hover::before {
        z-index: -1;
        transform: scale(1);
        background-color: ${state.onSurfaceVariant.hover};
      }

      /* Focus */
      &:focus-visible::before {
        transform: scale(1);
        border: 2px solid ${state.onSurfaceVariant.focus};
        background-color: ${state.onSurfaceVariant.focus};
      }

      /* Press */
      &:active::before {
        transform: scale(1);
        background-color: ${state.onSurfaceVariant.pressed};
      }

      /* Active Indicator */
      &::after {
        z-index: -2;
        background: ${isActive ? palette.secondaryContainer : "transparent"};
        animation: ${isActive ? "pulse 0.3s forwards" : "none"};
      }

      @keyframes pulse {
        to {
          transform: scale(1);
        }
      }
    `;
  }
);
