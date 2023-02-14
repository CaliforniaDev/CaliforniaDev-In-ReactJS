import * as Styled from "./styles";
import { v4 as uuid } from "uuid";

import html5Icon from "lib/assets/images/tools/html5-icon.svg";
import css3Icon from "lib/assets/images/tools/css3-icon.svg";
import javaScriptIcon from "lib/assets/images/tools/javascript-Icon.svg";
import adobeXdIcon from "lib/assets/images/tools/adobexd-icon.svg";
import illustratorIcon from "lib/assets/images/tools/illustrator-icon.svg";
import photoshopIcon from "lib/assets/images/tools/photoshop-icon.svg";
import githubIcon from "lib/assets/images/tools/github-icon.svg";

export const ToolItems = () => {
  const tools = [
    {
      title: "HTML5",
      icon: html5Icon,
      alt: "HTML5 logo image"
    },
    {
      title: "CSS3",
      icon: css3Icon,
      alt: "CSS3 logo image"
    },
    {
      title: "JavaScript",
      icon: javaScriptIcon,
      alt: "JavaScript logo image"
    },
    {
      title: "Adobe XD",
      icon: adobeXdIcon,
      alt: "AdobeXD logo image"
    },
    {
      title: "illustrator",
      icon: illustratorIcon,
      alt: "Adobe Illustrator logo image"
    },
    {
      title: "Photoshop",
      icon: photoshopIcon,
      alt: "Adobe Photoshop logo image"
    },
    {
      title: "GitHub",
      icon: githubIcon,
      alt: "Github logo image"
    },
  ];
  return (
      <Styled.DevToolsContainer id="tools-container">
        {tools.map((toolItem) => {
          return (
            <li key={uuid()}>
              <figure className="tool-item flex-wrapper">
                <img src={toolItem.icon} alt={toolItem.alt} />
                <figcaption>{toolItem.title}</figcaption>
              </figure>
            </li>
          );
        })}
    </Styled.DevToolsContainer>
  );
};
