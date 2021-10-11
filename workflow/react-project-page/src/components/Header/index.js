import React from 'react';

import classes from './Header.module';
import MainLogo from './MainLogo';
import StartButton from './StartButton';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <StartButton />
      </div>
    </header>
  );
};

export default Header;
