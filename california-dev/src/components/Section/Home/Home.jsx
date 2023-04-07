import React from "react";
import { StyledSection } from "./styles";
import { IconButton } from "components/common/IconButton";
import { Button } from "components/common/Button";
import { GitHubIcon } from "assets/images/icons/GitHubIcon";
import { InstagramIcon } from "assets/images/icons/InstagramIcon";
import { MailFavicon } from "assets/images/icons/MailIcon";
import pdfResume from "assets/docs/resume.pdf";
export const Home = () => {
  return (
    <StyledSection>
      <h1>Home</h1>
      <Button
        variant="filled"
        text="Resume"
        href={pdfResume}
      />
      <IconButton
        variant="tonal"
        icon={<GitHubIcon />}
        href="https://github.com/CaliforniaDev"
      />
      <IconButton
        variant="tonal"
        icon={<InstagramIcon />}
        href="https://www.instagram.com/leo.thedeveloper/"
      />
      <IconButton
        variant="tonal"
        icon={<MailFavicon />}
        href="mailto:leodaniels@californiadev.com"
      />
    </StyledSection>
  );
};
