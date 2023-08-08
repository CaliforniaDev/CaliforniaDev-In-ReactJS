import styled, { css } from "styled-components";

export const Section = styled.section(
  ({ theme: { palette, typography, media } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background: ${palette.primary};
    color: ${palette.onPrimary};
    padding: 4rem 2.4rem;
    gap: 3.2rem;

    h2 {
      ${typography.headline.small};
    }

    ${media.TABLET`
      height: 67.2rem;
      padding-left: ${media.padding.SMALL};
      padding-right: ${media.padding.SMALL};
      h2 {
        ${typography.display.medium};
      }
      .content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 46rem;
        text-align: left;
        word-break: keep-all;
      }
      .flex-end {
        display: flex;
        justify-content: flex-end;
      }

    `}

    ${media.DESKTOP`
      padding-left: ${media.padding.LARGE};
      padding-right: ${media.padding.LARGE};

      h2 {
        ${typography.display.large};
      }

      
    `}
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
      left: 1000px;
      top: 50%;
      transform: translateY(-50%);
    }

    .dots-svg.second-article {
      left: 0;
      top: 46px;
    }

    .zigzag-svg {
      position: absolute;
      opacity: 0.75;
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
