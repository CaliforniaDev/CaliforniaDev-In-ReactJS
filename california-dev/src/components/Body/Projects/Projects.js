import React from "react";
import * as Styled from "./styles";
import { ProjectItems } from "./ProjectItems";

export const Projects = () => {
  return (
    <React.Fragment>
      <header>
      <h2>Projects</h2>
      </header>
      <Styled.Section id="projects-section">
        <ProjectItems />
      </Styled.Section>
    </React.Fragment>
  );
};

          {/* <div className="flex-wrapper">
            <a
              href="https://californiadev.github.io/CupkayzV2.0/"
              target="_blank"
            >
              <img src={cupkayzCover} alt="Cup Kayz" />
            </a>
            <div className="project-card__description">
              <h3>Cup Kayz</h3>
              <h4>
                Technologies Used: <span>HTML5</span>, <span>CSS3</span>,{" "}
                <span>JavaScript</span>, <span>Google Places API</span>
              </h4>
              <ul>
                <li>
                  Responsive E-commerce web app. Can be used on a variety of
                  devices.
                </li>
                <li>
                  Google Place API is used to render map location before checkout
                  of each delivery.
                </li>
                <li>
                  User address input uses Autocomplete feature when entering
                  address for quicker service.
                </li>
                <li>
                  Before coding, an intricate low-fidelity & interactive hi-fidelity
                  wireframe using a 8pt grid system was created within Adobe XD.
                </li>
                <li>Vanilla JavaScript (no libraries) </li>
              </ul>
            </div>
          </div> */}