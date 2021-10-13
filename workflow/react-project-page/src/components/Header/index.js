import React, { useState } from 'react';

import MainLogo from './MainLogo';
import StartButton from './StartButton';

import classes from './Header.module';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

const Header = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const handleButton = () => {
    setIsAuthModalOpened(!isAuthModalOpened);
  };

  const closeModal = () => {
    setIsAuthModalOpened(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <StartButton handleButton={handleButton} />
        <AuthenticationModal
          closeModal={closeModal}
          isShown={isAuthModalOpened}
        />
      </div>
    </header>
  );
};

export default Header;
