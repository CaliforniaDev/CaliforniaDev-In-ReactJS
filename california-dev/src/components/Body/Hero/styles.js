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

  .blue-highlight {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  

  p {
    font-size: 2.4rem;
    line-height: 3.2rem;
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
`;
export const Content = styled.div`
  margin: 1.6rem 0 0 5.6rem;
  max-width: 100%;

  .blue-highlight {
    color: ${({ theme }) => theme.color.onSecondaryVarient};
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  padding: 1.6rem 0;
  .flex-wrapper {
    display: flex;
  }

  #resume-btn {
    padding: 1.2rem 3.6rem;
    margin-right: 3.2rem;
    margin-bottom: 1.6rem;
    border-radius: 2.4rem;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.color.onPrimary};
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.button};
    transition: ${({theme}) => theme.transition.button};

    &:hover {
      transition: ${({theme}) => theme.transition.button};
      box-shadow: ${({theme}) => theme.shadow.buttonHover};
    }
  }

  .flex-wrapper {
    display: flex;
  }

  .hero__social-link {
    display: flex;
    width: 40px;
    height: 40px;
    background-color: ${({theme}) => theme.color.inverse.primary};
    margin: 0 0.8rem;
    border-radius: 0.8rem;
    box-shadow: ${({theme}) => theme.shadow.button};
    transition: ${({theme}) => theme.transition.button};
    cursor: pointer;

    &:hover {
      transition: ${({theme}) => theme.transition.button};
      box-shadow: ${({theme}) => theme.shadow.buttonHover};
    }
}
`;
