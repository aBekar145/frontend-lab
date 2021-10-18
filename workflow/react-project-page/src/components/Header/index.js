import React, { useState } from 'react';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import classes from './Header.module';

const Header = () => {
  const [isModalOpened, setisModalOpened] = useState(false);

  const openModal = () => {
    setisModalOpened(true);
  };

  const closeModal = () => {
    setisModalOpened(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <AuthorizationButton openAuthModal={openModal} />
        <AuthenticationModal closeModal={closeModal} isShown={isModalOpened} />
      </div>
    </header>
  );
};

export default Header;
