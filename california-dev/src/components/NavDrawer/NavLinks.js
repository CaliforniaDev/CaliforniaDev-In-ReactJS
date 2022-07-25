import homeIcon from "lib/assets/images/home_white_24dp.svg";
import skillsIcon from "lib/assets/images/code_white_24dp.svg";
import projectIcon from "lib/assets/images/media_white_24dp.svg";
import emailIcon from "lib/assets/images/email_white_24dp.svg";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <img src={homeIcon} />
        <img src={skillsIcon} />
        <img src={projectIcon} />
        <img src={emailIcon} /> 
      </li>
    </ul>
  );
}

export default NavLinks;