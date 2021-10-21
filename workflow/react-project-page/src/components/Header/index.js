import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import classes from './Header.module';

const Header = (props) => {
  const openModal = () => {
    props.openModal();
  };

  const closeModal = () => {
    props.closeModal();
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <AuthorizationButton openAuthModal={openModal} />
        <AuthenticationModal
          closeModal={closeModal}
          isShown={props.isModalOpened}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({ type: 'OPEN_MODAL' }),
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
