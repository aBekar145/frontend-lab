import React from 'react';

import classes from './Header.module';
import MainLogo from './MainLogo';
import StartButton from './StartButton';

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <StartButton />
      </div>
    </div>
  );
};

export default Header;
