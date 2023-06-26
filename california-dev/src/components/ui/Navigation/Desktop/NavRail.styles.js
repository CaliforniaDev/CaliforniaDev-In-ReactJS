import styled, { css } from "styled-components";


export const Nav = styled.nav(({ theme: { palette, media } }) => {
  return css`
    display: none;

    ${media.TABLET`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: var(--nav-rail-width);
      max-width: var(--nav-rail-width);
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${palette.surface};
      z-index:  1;

      .logo {
        min-width: 3.8rem;
        min-height: 4rem;
      }
    `}
  `;
});

export const NavLinksWrapper = styled.div(({ theme: { palette } }) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;
});

export const NavLink = styled.a(
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
        transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
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
        background: ${palette.secondaryContainer};
        transform: ${isActive ? 'scale(1)' : 'scale(0)'};
        opacity: ${isActive ? 1 : 0};
      }
    `;
  }
);
