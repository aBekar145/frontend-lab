import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import { openHeaderModal, closeHeaderModal } from '../../store/actions/actions';

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
    isModalOpened: state.headerModalReducer.isModalOpened,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (key) => dispatch(openHeaderModal(key)),
    closeModal: () => dispatch(closeHeaderModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
