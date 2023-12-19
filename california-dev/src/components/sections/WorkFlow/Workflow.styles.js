import styled, { css } from 'styled-components';

export const Section = styled.section(
  ({ theme: { palette, typography, media } }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    background: ${palette.primary};
    color: ${palette.onPrimary};
    padding: 4rem ${media.padding.SMALL};

    svg {
      display: none;
    }

    .content-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      max-width: 1440px;
      overflow: hidden;
    }
    h2 {
      ${typography.headline.small};
    }
    p {
      ${typography.body.large};
    }

    @media (min-width: ${media.device.tablet}) {
      h2 {
        ${typography.display.small};
      }
      .body-text {
        max-width: 100%;
      }
    }

    @media (min-width: ${media.device.tabletLarge}) {
      svg {
        display: block;
      }

      h2 {
        ${typography.display.medium};
      }

      .content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 50rem;
        text-align: left;
        word-break: keep-all;
      }
      .flex-end {
        display: flex;
        justify-content: flex-end;
      }
    }

    @media (min-width: ${media.device.desktop}) {
      padding: ${media.padding.LARGE};
      .content-container {
        max-width: var(--desktop-max-width);
      }

      h2 {
        ${typography.display.large};
      }

      .body-text {
        ${typography.body.xlarge};
        max-width: 100%;
      }
    }
    @media (min-width: ${media.device.xlarge}) {
      padding: ${media.padding.XLARGE};
    }
  `
);

export const Article = styled.article(
  ({ theme: { palette } }) => css`
    display: flex;
    position: relative;

    .dots-svg {
      position: absolute;
      opacity: 0.75;
      circle {
        fill: ${palette.onPrimary};
      }
    }

    .dots-svg.first-article {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .dots-svg.second-article {
      left: 0;
      top: 46px;
    }

    .zigzag-svg {
      position: absolute;
      opacity: 0.6;
      right: 540px;
      bottom: 80px;
      path {
        stroke: ${palette.onPrimary};
      }
    }
    .eclipse-svg {
      position: absolute;
      opacity: 0.6;
      circle {
        stroke: ${palette.onPrimary};
      }
    }
    .eclipse-svg.first-article {
      top: 50%;
      transform: translateY(-50%);
      left: 635px;
    }
    .eclipse-svg.second-article {
      left: 146px;
      bottom: 50px;
    }
  `
);
