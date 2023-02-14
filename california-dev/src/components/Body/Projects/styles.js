import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  width: 100%;
  border: 1px solid cyan;
  padding: 1.6rem;
  gap: 2.4rem;
  flex-wrap: wrap;
`
export const ProjectCard = styled.article`
  display: flex;
  padding: 1.6rem;
  border-radius: 1.6rem;

  flex: 300px;
  background-color: ${({theme}) => theme.color.primary};
  color: ${({theme}) => theme.color.onPrimary};
  box-shadow: ${({theme}) => theme.shadow.primary};

  h3 {
    line-height: 1.4;
  }

  h4 {
    font-size: 1.8rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 2.4rem;
  }
  .flex-wrapper img {
    width: 100%;
    border-radius: 1.6rem;
  }
  .project-card__description {
    flex: 0 1 calc(100% - 200px);
  }
  .project-card__img-container {
    width: 100%;
    width: 400px;
    background-color: gray;
  }
  .project-card__description span {
    white-space: nowrap;
    color: ${({theme}) => theme.color.tertiary};
  }
`