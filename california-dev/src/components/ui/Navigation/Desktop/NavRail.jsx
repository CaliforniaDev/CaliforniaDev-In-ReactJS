import { useState } from "react";
import { Nav, NavList, NavItem } from "./NavRail.styles";
import {
  HomeIcon,
  ChartIcon,
  ImagesIcon,
  LightBulbIcon,
  EmailIcon,
} from "assets/images/icons/navigation";

const navItems = [
  { Icon: HomeIcon, name: "Home" },
  { Icon: ChartIcon, name: "Workflow" },
  { Icon: ImagesIcon, name: "Projects" },
  { Icon: LightBulbIcon, name: "Skills" },
  { Icon: EmailIcon, name: "Contact Us" },
];

export const NavRail = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [pressedAnchor, setPressedAnchor] = useState(null);

  return (
    <Nav>
      <NavList>
        {navItems.map(({ Icon, name }, index) => (
          <NavItem
            tabIndex="0"
            isActive={activeAnchor === index}
            isPressed={pressedAnchor === index}
            onMouseDown={() => setPressedAnchor(index)}
            onMouseUp={() => setPressedAnchor(null)}
            onClick={() => setActiveAnchor(index)}
            key={index}
          >
            <Icon className="nav-icon" />
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};
