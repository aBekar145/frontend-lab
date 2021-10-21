import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import classes from './Header.module';

const Header = (props) => {
  const [isModalOpened, setisModalOpened] = useState(false);

  const openModal = () => {
    // setisModalOpened(true);
  };

  const closeModal = () => {
    // setisModalOpened(false);
  };
  console.log('Header', props);

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

const mapStateToProps = (state) => {
  return {
    isModalOpened: state.isModalOpened,
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Header);
