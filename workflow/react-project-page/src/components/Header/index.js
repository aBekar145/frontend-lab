import React, { useState } from 'react';

import Drawer from './Drawer';
import MainLogo from './MainLogo';
import StartButton from './StartButton';

import classes from './Header.module';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <StartButton handleButton={handleButton} />
        <Drawer isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
