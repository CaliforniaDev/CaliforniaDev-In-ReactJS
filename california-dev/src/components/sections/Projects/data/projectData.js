import {
  CupKayz,
  SplitShifts,
  NybbleBox,
  memoryGameSrc,
} from 'assets/images/projects';

import cupkayzHomeScreen from 'assets/images/projects/cupkayz-webpage/cupkayz_home-screen@3x.png';
import memoryGamePreview from 'assets/images/projects/memory-game/memory-game@3x.png';

export const projectData = [
  {
    id: 'cup-kayz-project',
    title: 'CupKayz',
    client: 'Karla Mendez',
    projectType: 'Ecommerce Website',
    imageComponent: CupKayz,
    backgroundColor: '#778b7c',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
    detailedImgSrc: cupkayzHomeScreen,

    description: [
      `As a skilled web developer, I built a 
      responsive ecommerce web application that can be 
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
    detailedImgSrc: memoryGamePreview,
    repository: 'https://github.com/CaliforniaDev/React-Memory-Game',
    livePreview: 'https://californiadev.github.io/React-Memory-Game/',
    backgroundColor: null,
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: [
      `The React Memory Game is an interactive web-based game designed to 
      challenge players' memory skills. Built using ReactJS, the game offers 
      a dynamic and engaging user experience, complete with a real-time scoreboard, 
      multiple levels, and a game-over screen.`,

      `The game leverages custom React hooks to encapsulate game logic, 
      card management, and scoring, making the codebase modular and easier to maintain. 
      Styled-components are used for component-level styling, enhancing reusability and maintainability. 
      The project also employs Error Boundaries for graceful error handling.`,

      `Key features include a dynamic game board that adjusts according to the level, 
      a real-time scoreboard, a game-over screen with performance metrics, an instruction 
      modal for new players, and a loading screen for initial data loading. The codebase follows 
      industry best practices, including componentization and centralized theming for easier UI updates 
      and a consistent look and feel.`,
    ],
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
