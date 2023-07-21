import styled, { css } from "styled-components";

export const Nav = styled.nav(({ theme: { palette, media } }) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--nav-rail-width);
    max-width: var(--nav-rail-width);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${palette.surface};
    z-index: 1;
    padding: 1.6rem;

    .logo {
      position: relative;
      width: 3.8rem;
      height: 4rem;
    }
  `;
});

export const NavLinksWrapper = styled.div(({ theme: { palette } }) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
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
      padding: 4px ;
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
        bottom: 0;
        margin: auto;
        width: 4rem;
        height: 4rem;
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
        transform: ${isActive ? "scale(1)" : "scale(0)"};
        opacity: ${isActive ? 1 : 0};
      }
    `;
  }
);

export const ThemeIconContainer = styled.div(({ theme: { palette } }) => {
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${palette.outline};
    border-radius: 100%;
    min-width: 4.8rem;
    min-height: 4.8rem;

    .theme-icon {
      path {
        fill: ${palette.onSurfaceVariant};
      }
    }
  `;
});
