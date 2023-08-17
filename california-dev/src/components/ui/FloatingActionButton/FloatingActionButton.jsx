import React, { useState } from 'react';
import { useTheme } from 'context/ThemeContext';

import { FabContainer, FabButton, FabMenu } from './Fab.styles';
import { CogIcon } from 'assets/images/icons/misc/CogIcon';
export const FloatingActionButton = () => {
  const { toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded(prevState => !prevState);
  const menuSize = '180px';
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
