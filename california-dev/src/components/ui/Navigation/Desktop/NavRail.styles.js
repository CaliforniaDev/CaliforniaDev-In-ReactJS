import styled, { css } from 'styled-components';

export const Nav = styled.nav(({ theme: { palette, mode } }) => {
  return css`
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--nav-rail-width);
    max-width: var(--nav-rail-width);
    height: 100vh;
    padding: 1.6rem;
    background-color: ${palette.surface};
    z-index: 1;

    .logo {
      position: relative;
      width: 3.8rem;
      height: 4rem;
    }
    .theme-toggle-btn {
      position: relative;
      width: 48px;
      height: 48px;
      border-width: 1.5px;
      .state-layer {
        background-color: ${palette.onSurfaceVariant};
      }
    }
    .theme-icon {
      position: absolute;
      transition:
        opacity 0.3s ease-in-out,
        transform 0.3s cubic-bezier(0.2, 0, 0, 1);
      opacity: 0;
      path {
        fill: ${palette.onSurfaceVariant};
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
  `;
});

export const NavLinksWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  gap: 1.2rem;
`;

export const NavLink = styled.a(
  ({ theme: { palette }, isActive, isPressed }) => {
    return css`
      position: relative;

      display: flex;
      //* Dimensions enlarged to accommodate touch target */
      width: 4.8rem;
      height: 4.8rem;
      padding: 4px;
      justify-content: center;
      align-items: center;
      outline: none;

      &:hover .nav-icon,
      &:focus-visible .nav-icon {
        transform: scale(1.1);
        ${isPressed && 'transform: scale(0.9);'}
      }

      .nav-icon {
        position: relative;
        pointer-events: none;
        transition: transform 0.2s ease-in-out;
      }

      /* Icon changes color when active indicator is visible */
      .nav-icon path {
        fill: ${isActive
          ? palette.onSecondaryContainer
          : palette.onSurfaceVariant};
      }

      .state-layer,
      .active-indicator {
        width: 4.4rem;
        height: 4.4rem;
        margin: auto;
        border-radius: 50%;
        transform: scale(0);
        transition:
          transform 0.3s,
          opacity 0.4s,
          background-color 0.3s;
      }
      /* State Layer changes color if active indicator is visible */
      .state-layer {
        background-color: ${isActive
          ? palette.onSurface
          : palette.onSurfaceVariant};
      }

      /* Active Indicator */
      .active-indicator {
        background: ${palette.secondaryContainer};
        opacity: ${isActive ? 1 : 0};
        transform: ${isActive ? 'scale(1)' : 'scale(0)'};
      }
      /* Hover */
      &:hover {
        .state-layer {
          transform: scale(1);
          opacity: 0.08;
        }
      }
      /* Focus */
      &:focus-visible {
        .state-layer {
          transform: scale(1);
          opacity: 0.12;
        }
      }
      /* Pressed */
      &:active {
        .state-layer {
          opacity: 0.12;
        }
      }
    `;
  }
);
