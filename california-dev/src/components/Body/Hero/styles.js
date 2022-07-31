import styled from "styled-components";
import heroBG from "lib/assets/images/hero-bg.jpg";
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .blue-highlight {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const Header = styled.header`
  display: flex;
  flex-basis: 100%;
  height: ;
  gap: 3.2rem;
  align-items: center;
  padding: 0 1.6rem;
  border: 1px solid green;


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
    width: 35rem;
    min-width: 35rem;
    height: 35rem;
  }

  .profile-img {
    height: 475px;
  }
`;
export const Content = styled.div`
  // margin: 1.6rem 0 0 5.6rem;

  .blue-highlight {
    color: ${({ theme }) => theme.color.onSecondaryVarient};
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  padding: 1.6rem 0;
  gap: 2.4rem;
  align-items: center;
  .flex-wrapper {
    display: flex;
  }

  #resume-btn {
    padding: 1.2rem 3.6rem;
    border-radius: 2.4rem;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.color.onPrimary};
    background-color: ${({ theme }) => theme.color.primary};
    box-shadow: ${({ theme }) => theme.shadow.button};
    transition: ${({ theme }) => theme.transition.button};

    &:hover {
      transition: ${({ theme }) => theme.transition.button};
      box-shadow: ${({ theme }) => theme.shadow.buttonHover};
    }
  }

  .flex-wrapper {
    display: flex;
    gap: 1.6rem;
  }

  .hero__social-link {
    display: flex;
    width: 4rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.inverse.primary};

    border-radius: 0.8rem;
    box-shadow: ${({ theme }) => theme.shadow.button};
    transition: ${({ theme }) => theme.transition.button};
    cursor: pointer;

    &:hover {
      transition: ${({ theme }) => theme.transition.button};
      box-shadow: ${({ theme }) => theme.shadow.buttonHover};
    }
  }
`;
