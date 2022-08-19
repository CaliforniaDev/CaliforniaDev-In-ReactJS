import * as Styled from "./styles";
import cupkayzCover from "lib/assets/images/projects/cupkayz-project.png";
import battleShipCover from "lib/assets/images/projects/battleship-project.png";
import nybbleBoxCover from "lib/assets/images/projects/nybblebox-project.png";
import React from "react";
export const ProjectItems = () => {

  function Project(title, techUsed, coverImgSrc, descriptionList) {
    this.title = title;
    this.techUsed = techUsed;
    this.coverImgSrc = coverImgSrc;
    this.descriptionList = descriptionList;
    this.renderTech = () => {
      const lastItemIndex = techUsed.length - 1;
      const jsx = techUsed.map((item) => {
        return (
          <React.Fragment>
            <span>{item}</span>
            {this.techUsed.indexOf(item) !== lastItemIndex ? ", " : ""}
          </React.Fragment>
        );
      });
      return jsx;
    };
  }
  const cupKayz = new Project(
    "Cup Kayz",
    ["HTML5", "CSS3", "JavaScript", "Google Places API"],
    cupkayzCover,
    [
      "Responsive E-commerce web app. Can be used on a variety of devices.",
      "Google maps api is used to render map location before checkout of each delivery.",
      "User address input uses Autocomplete feature when entering address for quicker service.",
      "Before coding, an intricate low-fidelity & interactive hi-fidelity wireframe using a 8pt grid system was created within Adobe XD. ",
      "Vanilla JavaScript (no libraries)",
    ]
  );

  const battleShip = new Project(
    "Battleship Game",
    ["HTML5", "CSS3", "JavaScript"],
    battleShipCover,
    [
      "Based on the classic Battleship game, this application was designed in raw JavaScript",
      "It manipulates the DOM elements to output the app onto an HTML5 canvas element",
      "Javascript algorithm is used to determine the placement of each ship to avoid ship collision and keeps each position within the boards play area.",
      "Renders the user a high score by calculating the number of hit / misses to determine your accuracy.",
      "Vanilla JavaScript (no libraries)"
    ]
  );
  const nybbleBox = new Project(
    "Nybblebox",
    ["Wordpress"],
    nybbleBoxCover,
    [
      "Responsive web app used to display graphic / branding designs.",
      "Wordpress was used for this project to complete a time efficient landing page without the need of raw code."
    ]
  )

  const allProjects = [cupKayz, battleShip, nybbleBox];

  return (
    <React.Fragment>
      {allProjects.map((project) => {
        return (
          <Styled.ProjectCard>
            <div className="flex-wrapper">
              <h3>{project.title}</h3>
              <div className="project-card__img-container">
                <a
                  href="https://californiadev.github.io/CupkayzV2.0/"
                  target="_blank"
                >
         
                </a>
              </div>
              {/* <div className="project-card__description">
                <h3>{project.title}</h3>
                <h4> Technologies Used: {project.renderTech()}</h4>
                <ul>
                  {project.descriptionList.map((listItem) => (
                    <li>{listItem}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </Styled.ProjectCard>
        );
      })}
    </React.Fragment>
  );
};

// function mapTechUsed(techUsedArray) {
//   console.log(cupKayz.renderTech());
//   const lastItemIndex = techUsedArray.length - 1; // GETS INDEX OF LAST ITEM
//   const technologies = techUsedArray.map((item) => {
//     return (
//       <React.Fragment>
//         <span>{item}</span>
//         {/**
//          * STATEMENT BELOW DETERMINES WHETHER OR NOT TO ADD A COMMA AND SPACE AFTER EACH ITEM
//          */}
//         {techUsedArray.indexOf(item) !== lastItemIndex ? ", " : ""}
//       </React.Fragment>
//     );
//   });
//   return technologies;
// }

// const projects = [
//   {
//     title: "Cup Kayz",
//     techUsed: ["HTML5", "CSS3", "JavaScript", "Google Places API"],
//     coverImgSrc: cupkayzCover,
//     descriptionList: [
//       "Responsive E-commerce web app. Can be used on a variety of devices.",
//       "Google maps api is used to render map location before checkout of each delivery.",
//       "User address input uses Autocomplete feature when entering address for quicker service.",
//       "Before coding, an intricate low-fidelity & interactive hi-fidelity wireframe using a 8pt grid system was created within Adobe XD. ",
//       "Vanilla JavaScript (no libraries)",
//     ],
//     renderTech: function () {
//       const lastItemIndex = this.techUsed.length - 1;
//       const jsx = this.techUsed.map((item) => {
//         return (
//           <React.Fragment>
//             <span>{item}</span>
//             {this.techUsed}
//           </React.Fragment>
//         );
//       });
//     },
//   },
// ];
