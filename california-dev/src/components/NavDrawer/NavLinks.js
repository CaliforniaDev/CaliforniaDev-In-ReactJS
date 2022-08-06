import * as Styled from './styles';
import homeIcon from "lib/assets/images/icons/home_white_24dp.svg";
import skillsIcon from "lib/assets/images/icons/code_white_24dp.svg";
import projectIcon from "lib/assets/images/icons/media_white_24dp.svg";
import emailIcon from "lib/assets/images/icons/email_white_24dp.svg";

const NavLinks = () => {
  return (
    <Styled.NavLinks className='links'>
        <li><img src={homeIcon} /></li>
        <li><img src={skillsIcon} /></li>
        <li><img src={projectIcon} /></li>
        <li><img src={emailIcon} /> </li>
    </Styled.NavLinks>
  );
}

export default NavLinks;