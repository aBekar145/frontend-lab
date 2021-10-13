import React, { useState } from 'react';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import classes from './Header.module';

const Header = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const openAuthModal = () => {
    setIsAuthModalOpened(!isAuthModalOpened);
  };

  const closeModal = () => {
    setIsAuthModalOpened(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <AuthorizationButton openAuthModal={openAuthModal} />
        <AuthenticationModal
          closeModal={closeModal}
          isShown={isAuthModalOpened}
        />
      </div>
    </header>
  );
};

export default Header;
