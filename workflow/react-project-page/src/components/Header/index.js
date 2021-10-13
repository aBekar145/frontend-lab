import React, { useState } from 'react';

import MainLogo from './MainLogo';
import StartButton from './StartButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import classes from './Header.module';

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
