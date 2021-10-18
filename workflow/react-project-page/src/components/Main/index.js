import React, { useState } from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

import classes from './Main.module.scss';

const Main = () => {
  const [isModalOpened, setisModalOpened] = useState(false);

  const openModal = () => {
    setisModalOpened(true);
  };

  const closeModal = () => {
    setisModalOpened(false);
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
