import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  margin: auto 0;
  background-color: red;
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
`
export const HeroHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.6rem;
  padding: 0 1.6rem;

  p,span {
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
`
export const HeroContent = styled.div`

`