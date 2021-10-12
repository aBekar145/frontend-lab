import React, { useState } from 'react';

import Drawer from './Drawer';
import MainLogo from './MainLogo';
import StartButton from './StartButton';

import classes from './Header.module';

const Header = () => {
  const [isToggleDrawer, setIsToggleDrawer] = useState(false);

  const handleButton = () => {
    setIsToggleDrawer(!isToggleDrawer);
  };

  const drawerCloseHandler = () => {
    setIsToggleDrawer(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <StartButton handleButton={handleButton} />
        <Drawer isToggleDrawer={isToggleDrawer} onClose={drawerCloseHandler} />
      </div>
    </header>
  );
};

export default Header;
