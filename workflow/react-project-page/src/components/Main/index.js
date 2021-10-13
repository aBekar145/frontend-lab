import React, { useState } from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import ContentModule from './ContentModal';

import classes from './Main.module.scss';
import CardModal from '../modalComponents/CardModal';

const Main = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

  const handleButton = () => {
    setIsAuthModalOpened(!isAuthModalOpened);
  };

  const closeModal = () => {
    setIsAuthModalOpened(false);
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock handleButton={handleButton} />
        <CardModal closeModal={closeModal} isShown={isAuthModalOpened} />
      </div>
    </main>
  );
};

export default Main;
