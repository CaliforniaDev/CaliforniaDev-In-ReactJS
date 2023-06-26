import { Section, Article } from "./Workflow.styles";

export const Workflow = () => {
  return (
    <Section id="workflow-section">
      <Article>
        <h2>UI / UX Design</h2>
        <p>
          During the initial design process, both low-fidelity wire-frames and
          interactive hi-fidelity prototypes are produced using Figma. Each
          design undergoes extensive design research and development of specific
          design patterns. All projects also undergo user/usability testing to
          ensure the final build is effective, efficient, and enjoyable for all
          users.
        </p>
      </Article>
      <Article>
        <h2>Engineering</h2>
        <p>
          After completing the prototype, the next step is to plan the optimal
          software architecture for the project. All code is written with an
          emphasis on cleanliness, responsiveness, and testing, to ensure that
          the project looks and functions well on a wide range of devices and
          screen sizes. Each line of code is carefully crafted for maximum
          performance and maintainability, to provide an exceptional user
          experience now and in the future.
        </p>
      </Article>
    </Section>
  );
};
