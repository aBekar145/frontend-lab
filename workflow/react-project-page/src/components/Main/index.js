import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';
import MainTitle from './MainTitle';
import { fetchCocktail } from '../../helpers/asyncActions/randomCocktail';

import { openMainModal, closeMainModal } from '../../store/actions/actions';

import classes from './Main.module.scss';

const Main = () => {
  const dispatch = useDispatch();
  const isModalOpened = useSelector(
    (state) => state.mainModalReducer.isModalOpened
  );

  const openModal = () => {
    dispatch(openMainModal());
    dispatch(fetchCocktail());
  };

  const closeModal = () => {
    dispatch(closeMainModal());
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock openCardModal={openModal} />
        <CardModal closeModal={closeModal} isShown={isModalOpened} />
      </div>
    </main>
  );
};

export default Main;
