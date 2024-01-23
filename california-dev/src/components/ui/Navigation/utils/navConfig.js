import {
  HomeIcon,
  ChartIcon,
  ImagesIcon,
  LightBulbIcon,
  EmailIcon,
  BackArrowIcon,
} from 'assets/images/icons/navigation';

export const navItemsData = {
  main: [
    {
      Icon: HomeIcon,
      id: '#home-section',
      name: 'Home',
      route: '/#home-section',
    },
    {
      Icon: ChartIcon,
      id: '#workflow-section',
      name: 'Workflow',
      route: '/#workflow-section',
    },
    {
      Icon: ImagesIcon,
      id: '#projects-section',
      name: 'Projects',
      route: '/#projects-section',
    },
    {
      Icon: LightBulbIcon,
      id: '#skills-section',
      name: 'Skills',
      route: '/#skills-section',
    },
    {
      Icon: EmailIcon,
      id: '#contact-me-section',
      name: 'Contact Me',
      route: '/#contact-me-section',
    },
  ],
  projectDetails: [
    {
      Icon: BackArrowIcon,
      id: '#projects-section',
      name: 'back',
      route: '/#projects-section',
    },
  ],
};
