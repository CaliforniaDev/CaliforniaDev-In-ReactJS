import styled from "styled-components";
/**
 * ! HERO STYLED COMPONENTS 
 */
export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: auto 0;
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  max-width: 100vw;
`
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.6rem;
  padding: 0 1.6rem;

  p,span {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  h2 {
    margin-bottom: 1.6rem;
  }

  .profile-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    width: 350px;
    min-width: 350px;
    height: 350px;
  }

  .profile-img {
    height: 475px;
  }
`
export const Content = styled.div`
  margin: 1.6rem 0 0 5.6rem;
  max-width: 100%;

  .blue-highlight {
    color: ${({theme}) => theme.color.primary}
  }
`