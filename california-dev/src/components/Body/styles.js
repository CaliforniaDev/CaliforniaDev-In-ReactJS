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