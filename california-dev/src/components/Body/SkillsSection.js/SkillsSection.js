import * as Styled from "./styles";
export const SkillsSection = () => {
  return (
    <Styled.Section>
      <Styled.ElevatedCard>
        <div class="skills-container">
          <div class="skills__col">
            <div class="col__content">
              <figure class="skills__img">
                <img src="images/pen-tool.svg" />
              </figure>
              <h4>UI / UX Designer</h4>
              <p>
                During the inital design process. I create both a low fidelity
                wireframe, then an interactive hi-fidelity prototype using Adobe
                XD. Each design goes through exstensive user testing to ensure
                the best possible user experience.
              </p>
            </div>
          </div>
          <div class="skills__col">
            <div class="col__content">
              <figure class="skills__img">
                <img src="images/desktop-icon.svg" />
              </figure>
              <h4>Front-end Developer</h4>
              <p>
                After the client decides on a design, the next process is coming
                up with the software architecture that best suits the project. I
                enjoy to write clean responsive code that renders well on a
                variety of devices and windows. Each line of code is
                thoughtfully written to increase performance and
                maintainability.
              </p>
            </div>
          </div>
        </div>
      </Styled.ElevatedCard>
    </Styled.Section>
  );
};

const C = () => {};
