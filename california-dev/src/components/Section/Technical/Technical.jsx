import { TechnicalSection } from "./styles";
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

export const Technical = () => {
  const iconComponents = [
    HtmlIcon,
    CssIcon,
    FigmaIcon,
    AdobeIllustrator,
    GitIcon,
    GithubIcon,
    JavascriptIcon,
    PhotoshopIcon,
    ReactIcon,
  ];
  return (
    <TechnicalSection>
      <h2>Technical Proficiencies</h2>
      <div className="grid-wrapper">
        {iconComponents.map((IconComponent, index) => (
          <div className="skills-card" key={index}>
            <IconComponent className="skills-card__icon" />
            <p className="skills-card__text">Title</p>
          </div>
        ))}
      </div>
    </TechnicalSection>
  );
};
