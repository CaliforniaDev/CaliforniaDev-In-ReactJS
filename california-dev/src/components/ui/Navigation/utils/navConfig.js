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
      id: '#contact-us-section',
      name: 'Contact Us',
      route: '/#contact-us-section',
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
