import styled, { css } from 'styled-components';

export const ProjectContainer = styled.div(
  ({ theme: { palette, elevation, typography, media }, $bg }) => css`
    color: ${palette.onSurface};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: var(--mobile-nav-height);

    word-wrap: break-word;

    header {
      display: block;
      width: 100%;
      margin-bottom: 2.4rem;
    }

    h1 {
      ${typography.hero.large}
    }

    p {
      ${typography.body.large}
    }
    .mobile-nav {
      width: 100%;
    }
    .project-info__description {
      margin-bottom: 1.6rem;
    }
    .project-info__description:last-of-type {
      margin-bottom: 0;
    }

    .content-container {
      max-width: 1440px;
      padding: 64px 24px;
    }
    .category {
      color: ${palette.tertiary};
      margin-bottom: 8px;
      ${typography.body.medium}
    }

    .project-meta {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 24px 0;
      align-items: end;

      .project-meta__item {
        align-self: end;
        display: flex;
        flex-direction: column;
        border-top: 1.5px solid ${palette.outline};
        gap: 16px;
        width: 100%;
        max-height: 180px;
        height: 180px;
        justify-content: space-between;
        padding: 12px;
      }
    }
    .project-meta__title {
      ${typography.title.medium}
      color: ${palette.secondary};
    }

    .image-container {
      border-radius: 12px;
      overflow: hidden;

      box-shadow: ${elevation.level5};
      img {
        width: 100%;
      }
    }

    // styles for NavRail.styles.js
    .nav__link {
      border: 2px solid ${palette.outline};
      border-radius: 50%;
    }
    // styles for NavRail.styles.js

    .nav {
      display: none;
    }

    @media (min-width: ${media.device.tablet}) {
      margin-left: var(--nav-rail-width);
      margin-top: 0;
      .nav {
        display: flex;
      }
      .mobile-nav {
        display: none;
      }
    }

    @media (min-width: ${media.device.desktop}) {
      padding: 0 24px;
      .project-info {
        display: grid;
        grid-template-columns: 2fr 1.5fr;
        gap: 4rem;
        margin-bottom: 4rem;
      }
      .project-info__description {
        min-width: 30ch;
      }
      .project-meta {
        padding-top: 0;
      }
    }
  `
);
