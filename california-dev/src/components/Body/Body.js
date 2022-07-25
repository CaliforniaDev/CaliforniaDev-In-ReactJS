import * as Styled from "./styles";
import profileImg from "lib/assets/images/profile.JPG";
export const Body = () => {
  return (
    <main id="main">
      <Styled.HeroSection id="hero">
        <Styled.HeroHeader className="hero__col-1">
          <div className="profile-img-container">
            <img class="profile-img" src={profileImg} />
          </div>
        </Styled.HeroHeader>
      </Styled.HeroSection>
    </main>
  )
}

