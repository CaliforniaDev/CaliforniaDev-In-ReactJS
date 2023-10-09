import {
  CupKayz,
  SplitShifts,
  NybbleBox,
  memoryGameSrc,
} from 'assets/images/projects';

import cupkayzHomeScreen from 'assets/images/projects/cupkayz-webpage/cupkayz_home-screen@3x.png';

export const projectData = [
  {
    id: 'cup-kayz-project',
    title: 'CupKayz',
    client: 'Karla Mendez',
    projectType: 'E-commerce Website',
    imageComponent: CupKayz,
    src: null,
    backgroundColor: '#778b7c',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
    detailedImgSrc: cupkayzHomeScreen,

    description: [
      `As a skilled web developer, I built a 
      responsive e-commerce web application that can be 
      used on various devices. To improve delivery service, 
      I integrated the Google Maps API for map locations, 
      and added the Autocomplete feature for address input for 
      enhanced user experience.`,

      `To plan out the design, I created 
      low and high fidelity wire-frames using Adobe XD's 8pt grid system. 
      I also used vanilla JavaScript, ensuring the project was completed 
      without reliance on any libraries. This approach helped me to have 
      a better control and maintainability of the final solution.`,
    ],
  },
  {
    id: 'nybble-box-project',
    title: 'NybbleBox',
    client: 'Personal Project',
    projectType: 'Landing Page',
    imageComponent: NybbleBox,
    src: null,
    techStack: ['WordPress'],
    backgroundColor: '#0d0d0d',
  },

  {
    id: 'memory-game-project',
    title: 'Memory Game',
    client: 'Personal Project',
    projectType: 'React App',
    imageComponent: null,
    src: memoryGameSrc,
    backgroundColor: null,
    techStack: ['HTML', 'CSS', 'JavaScript', 'React',],
    description: [`A simple memory game built with React`],
  },
  {
    id: 'split-shifts-project',
    title: 'SplitShifts',
    client: 'BW Security Services Inc.',
    projectType: 'Schedule Management Web App',
    imageComponent: SplitShifts,
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    src: null,
    backgroundColor: '#d7756b',
  },
];
