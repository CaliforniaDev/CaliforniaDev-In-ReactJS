import { StyledFooter, Grid } from './Footer.styles';
import { Wordmark } from 'assets/images/logo/Wordmark';
import { Logo } from 'assets/images/logo/Logo';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo-svg-wrapper">
        <Logo className="logo-svg" idSuffix="footer" />
        <Wordmark className="logo-wordmark-svg" />
      </div>
      <Grid>
        <div className="grid-item site-map">
          <strong>SITE MAP</strong>

          <ul>
            <li className="link">
              <a
                href="#home-section"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li className="link">
              <a
                href="#workflow-section"
                rel="noopener noreferrer"
              >
                Workflow
              </a>
            </li>
            <li className="link">
              <a
                href="#projects-section"
                rel="noopener noreferrer"
              >
                Latest Projects
              </a>
            </li>
            <li className="link">
              <a
                href="#skills-section"
                rel="noopener noreferrer"
              >
                Skills
              </a>
            </li>
            <li className="link">
              <a
                href="#contact-me-section"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-item social">
          <strong>SOCIALS</strong>

          <ul>
            <li className="link">
              <a
                href="http://instagram.com/leo.thedeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="link">
              <a
                href="http://github.com/californiaDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="link">
              <a
                href="https://www.linkedin.com/in/leo-daniels/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="link">
              <a
                href="https://github.com/CaliforniaDev/CaliforniaDev-In-ReactJS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by React JS
              </a>
            </li>
          </ul>
        </div>

        <div className="grid-item email">
          <strong>SAY HELLO</strong>
          <ul>
            <li className="link">
              <a
                href="mailto:leodaniels@californiaDev.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                leodaniels@californiaDev.com
              </a>
            </li>
          </ul>
        </div>
      </Grid>
      <div className="copy-rights">
        <p>© 2024 CaliforniaDev. All rights reserved</p>
      </div>
    </StyledFooter>
  );
};
