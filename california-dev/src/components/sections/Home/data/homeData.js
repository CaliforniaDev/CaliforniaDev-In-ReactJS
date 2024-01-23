import {
  GitHubIcon,
  InstagramIcon,
  MailIcon,
} from 'assets/images/icons/social';

export const INITIAL_X_POSITION = -85;
export const INITIAL_ROTATE_DEGREE = -45;
export const TRANSITION_DURATION = 0.5;

export const socialMediaData = [
  {
    name: 'github',
    icon: <GitHubIcon />,
    href: 'https://github.com/CaliforniaDev',
    position: { x: 4 },
  },
  {
    name: 'instagram',
    icon: <InstagramIcon />,
    href: 'https://www.instagram.com/leo.thedeveloper/',
    position: { x: 68 },
  },
  {
    name: 'mail',
    icon: <MailIcon />,
    href: 'mailto:leodaniels@californiadev.com',
    position: { x: 132 },
  },
];