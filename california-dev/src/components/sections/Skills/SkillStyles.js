import styled, {css} from "styled-components";

export const Section = styled.section(({theme: {palette, typography}}) => {
  return css`
    display: flex;
    flex-direction: column;
    background: ${palette.primary};
    color: ${palette.onPrimary};
    padding: 4rem 2.4rem;
    gap: 3.2rem;

    h2 {
      ${typography.headline.small};
    }
  `
});

export const Article = styled.article(({theme: {palette}}) => {
  return css`

  `
})
