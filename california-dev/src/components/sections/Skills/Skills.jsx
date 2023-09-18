import { Section } from "./Skills.styles";
import {
  HtmlIcon,
  CssIcon,
  FigmaIcon,
  AdobeIllustrator,
  GitIcon,
  GithubIcon,
  JavascriptIcon,
  PhotoshopIcon,
  ReactIcon,
} from "assets/images/tools/";

export const Skills = () => {
  const iconComponents = [
    { IconComponent: HtmlIcon, title: "HTML" },
    { IconComponent: CssIcon, title: "CSS" },
    { IconComponent: FigmaIcon, title: "Figma" },
    { IconComponent: AdobeIllustrator, title: "Illustrator" },
    { IconComponent: GitIcon, title: "Git" },
    { IconComponent: GithubIcon, title: "GitHub" },
    { IconComponent: JavascriptIcon, title: "JavaScript" },
    { IconComponent: PhotoshopIcon, title: "Photoshop" },
    { IconComponent: ReactIcon, title: "React" },
  ];

  return (
    <Section id="skills-section">
      <div className="content-container">
        <h2>-Skills & Technical Proficiencies-</h2>
        <div className="flex-wrapper">
          {iconComponents.map((icon, index) => (
            <div className="skills-card" key={index}>
              <icon.IconComponent className="skills-card__icon" />
              <p className="skills-card__text">{icon.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
