import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

import { openModal, closeModal } from '../../store/actions/actions';

import classes from './Main.module.scss';

const Main = () => {
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
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock openCardModal={openModalWindow} />
        <CardModal closeModal={closeModalWindow} isShown={isModalOpened} />
      </div>
    </main>
  );
};

export default Main;
