import React, { useState } from "react";

import { FabContainer, FabButton, FabMenu } from "./Fab.styles";
import { CogIcon } from "assets/images/icons/CogIcon";
export const FloatingActionButton = ({ toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded((prevState) => !prevState);
  const menuSize = "180px";
  return (
    <FabContainer>
      <FabButton size={menuSize} expanded={expanded} onClick={handleClick}>
        <FabMenu size={menuSize} expanded={expanded}>
          <ul>
            <li onClick={toggleTheme}>Theme Mode</li>
          </ul>
        </FabMenu>
        {!expanded && <CogIcon />}
      </FabButton>
    </FabContainer>
  );
};
