import * as Styled from "./styles";
import * as S from "./skillstyle";
import { ToolItems } from "./ToolItems";
import penToolImg from "lib/assets/images/icons/pen-tool.svg";
import computerImg from "lib/assets/images/icons/desktop-icon.svg";
export const SkillsSection = () => {
  return ( 
    <Styled.Section id="skills">
      <S.FlexWrapper>
        <S.SkillFigure>
          <img src={penToolImg} alt="adobe pen tool" />
        </S.SkillFigure>
        <S.SkillCard>
        
        </S.SkillCard>
      </S.FlexWrapper>
      <Styled.ElevatedCard id="skills-card">
        {/* <div className="flex-container">
          <div className="skills__col">
            <figure className="img-wrapper">
              <img
                style={{ height: "58px" }}
                src={penToolImg}
                alt="Graphic design pen tool icon"
              />
            </figure>
            <h3>UI / UX Designer</h3>
            <p>
              During the inital design process. I create both a low fidelity
              wireframe, then an interactive hi-fidelity prototype using Adobe
              XD. Each design goes through exstensive user testing to ensure the
              best possible user experience.
            </p>
          </div>
          <div className="skills__col">
            <figure className="img-wrapper">
              <img src={computerImg} alt="Desktop computer icon" />
            </figure>
            <h3>Front-end Developer</h3>
            <p>
              After the client decides on a design, the next process is coming
              up with the software architecture that best suits the project. I
              enjoy to write clean responsive code that renders well on a
              variety of devices and windows. Each line of code is thoughtfully
              written to increase performance and maintainability.
            </p>
          </div>
        </div> */}
        <div className="flex-container column">
          <h3>Skill-set & Tools</h3>
          <ToolItems />
        </div>
      </Styled.ElevatedCard>
    </Styled.Section>
  );
};

// const  SkillDescriptions = () => {
//   return (

//   )
// };
