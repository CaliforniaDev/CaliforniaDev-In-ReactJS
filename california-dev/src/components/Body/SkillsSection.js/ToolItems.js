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
    },
    {
      title: "CSS3",
      icon: css3Icon,
    },
    {
      title: "JavaScript",
      icon: javaScriptIcon,
    },
    {
      title: "Adobe XD",
      icon: adobeXdIcon,
    },
    {
      title: "illustrator",
      icon: illustratorIcon,
    },
    {
      title: "Photoshop",
      icon: photoshopIcon,
    },
    {
      title: "GitHub",
      icon: githubIcon,
    },
  ];
  return (
    <Styled.DevToolsContainer id="tools-container">
      {tools.map((toolItem) => {
        return (
          <figure className="tool-item" key={uuid()} >
            <img src={toolItem.icon} />
            <figcaption>{toolItem.title}</figcaption>
          </figure>
        );
      })}
    </Styled.DevToolsContainer>
  );
};
