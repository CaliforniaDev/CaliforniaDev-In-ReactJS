import {
  CupKayz,
  SplitShifts,
  NybbleBox,
  memoryGameSrc,
} from 'assets/images/projects';

import cupkayzPreview from 'assets/images/projects/cupkayz-webpage/cupkayz_home-screen@2x.png';
import memoryGamePreview from 'assets/images/projects/memory-game/memory-game@2x.png';
import nybbleBoxPreview from 'assets/images/projects/nybblebox/nybblebox-webpage@1x.png';

class Project {
  constructor({
    id,
    title,
    client,
    projectType,
    svgThumbnail, 
    staticThumbnail,
    thumbnailBackground,
    previewImage,
    techStack,
    description,
    repository,
    livePreview,
  }) {
    this.id = id;
    this.title = title;
    this.client = client;
    this.projectType = projectType;
    this.svgThumbnail = svgThumbnail;
    this.staticThumbnail = staticThumbnail;
    this.thumbnailBackground = thumbnailBackground;
    this.previewImage = previewImage;
    this.techStack = techStack;
    this.repository = repository;
    this.livePreview = livePreview;
    this.description = description;
  }
}

const cupKayzProject = new Project({
  id: 'cup-kayz-project',
  title: 'CupKayz',
  client: 'Karla Mendez',
  projectType: 'Ecommerce Website',
  svgThumbnail: CupKayz,
  staticThumbnail: null,
  thumbnailBackground: '#778b7c',
  previewImage: cupkayzPreview,
  techStack: ['HTML', 'CSS', 'JavaScript', 'Adobe XD'],
  repository: 'https://github.com/CaliforniaDev/CupkayzV2.0',
  livePreview: 'https://californiadev.github.io/CupkayzV2.0/',
  description: [
    `CupKayz is a fully responsive ecommerce web application 
    designed to offer a seamless shopping experience across multiple 
    devices. The application serves as a one stop shop for a variety 
    of bakery items, featuring functionalities like product selection, 
    cart management, and location based delivery services.`,

    `Built using HTML, CSS, and Vanilla JavaScript, the project avoids 
    reliance on external libraries, ensuring optimal performance and 
    maintainability. The application integrates Google Maps API for 
    real-time location tracking to enhance the delivery service. 
    It also offers an Autocomplete feature for address input, 
    further enhancing user experience.`,

    `The planning and design phase involved creating low and high fidelity 
    wireframes using Adobe XD's 8pt grid system, ensuring a consistent and 
    intuitive UI/UX design. This comprehensive approach demonstrates a deep 
    understanding of frontend technologies and API integrations, showcasing 
    the ability to plan, design, and execute a full fledged ecommerce application 
    with a focus on user experience and performance.`,
  ],
});

const nybbleBoxProject = new Project({
  id: 'nybble-box-project',
  title: 'NybbleBox',
  client: 'Personal Project',
  projectType: 'Landing Page',
  svgThumbnail: NybbleBox,
  staticThumbnail: null,
  thumbnailBackground: '#0d0d0d',
  previewImage: nybbleBoxPreview,
  techStack: ['WordPress'],
  repository: null,
  livePreview: 'http://nybblebox.com/',
  description: [
    `NybbleBox is a WordPress-based landing page designed to serve as 
      the digital front door for a branding agency specializing in small 
      businesses. The project embodies the company's mission to make 
      powerful branding accessible to everyone, regardless of their skill 
      level, design background, or budget.`,

    `The landing page is crafted to streamline the branding process, 
      offering a range of services and solutions that can elevate any 
      business's story into a compelling brand. It serves as a one-stop 
      platform where potential clients can learn about the services offered, 
      view portfolio pieces, and get in touch for customized solutions.`,

    `Built on WordPress, the project leverages the platform's robust 
      features and flexibility, allowing for easy content updates and 
      scalability. The design is fully responsive, ensuring a seamless user 
      experience across various devices. SEO best practices were also 
      implemented to improve the site's visibility and reach a wider audience.`,
  ],
});

const memoryGameProject = new Project({
  id: 'memory-game-project',
  title: 'Memory Game',
  client: 'Personal Project',
  projectType: 'React App',
  svgThumbnail: null, 
  staticThumbnail: memoryGameSrc, 
  thumbnailBackground: null,
  previewImage: memoryGamePreview,
  techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
  repository: 'https://github.com/CaliforniaDev/React-Memory-Game',
  livePreview: 'https://californiadev.github.io/React-Memory-Game/',
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
});

const splitShiftsProject = new Project({
  id: 'split-shifts-project',
  title: 'SplitShifts',
  client: 'BW Security Services Inc.',
  projectType: 'Schedule Management Web App',
  svgThumbnail: SplitShifts, // svgThumbnail,
  staticThumbnail: null, // change the key name to staticThumbnail
  thumbnailBackground: '#d7756b',
  previewImage: null,
  techStack: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
  ],
  repository: null,
  livePreview: null,
  description: null,
});

export const projectData = [
  cupKayzProject,
  nybbleBoxProject,
  memoryGameProject,
  splitShiftsProject,
];
