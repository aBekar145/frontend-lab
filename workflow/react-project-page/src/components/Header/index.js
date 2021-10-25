import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import { openModal, closeModal } from '../../store/actions/actions';

import classes from './Header.module';

const Header = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector(
    (state) => state.modalReducer.isModalOpened
  );

  const openModalWindow = () => {
    dispatch(openModal());
  };

  const closeModalWindow = () => {
    dispatch(closeModal());
  };

  return (
    <header className={classes.header}>
      <div className={classes.contextWrapper}>
        <MainLogo />
        <AuthorizationButton openAuthModal={openModalWindow} />
        <AuthenticationModal
          closeModal={closeModalWindow}
          isShown={isModalOpened}
        />
      </div>
    </header>
  );
};

export default Header;
