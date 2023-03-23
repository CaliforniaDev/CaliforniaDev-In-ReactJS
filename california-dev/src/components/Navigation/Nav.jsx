import * as Styled from "./styles";
import {HamburgerMenu} from "../common/HamburgerMenu";
export function Nav() {
  //  const [toggle, setToggle] = useState(false);
  return <Styled.Nav>
    <HamburgerMenu />
  </Styled.Nav>;
}

// const Nav = styled.nav((props) => {
//   console.log(props);
//   return `
//     display: flex;
//     background-color: "black';
//     width: 100%;
//   `
// })
// const Nav = styled.nav`
//   height: 56px;
//   background: ${({ theme: { elevation } }) => elevation.level1.surfaceColor};
//   box-shadow: ${({ theme: { elevation } }) => elevation.level1.shadow};

// `;
