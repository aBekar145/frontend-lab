import React, { useState } from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

import classes from './Main.module.scss';

const Main = () => {
  const [isCardModalOpened, setIsCardModalOpened] = useState(false);

  const openCardModal = () => {
    setIsCardModalOpened(!isCardModalOpened);
  };

  const closeModal = () => {
    setIsCardModalOpened(false);
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock openCardModal={openCardModal} />
        <CardModal closeModal={closeModal} isShown={isCardModalOpened} />
      </div>
    </main>
  );
};

export default Main;
