import React, { useState } from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

import classes from './Main.module.scss';

const Main = () => {
  const [isCardModalOpened, setIsCardModalOpened] = useState(false);

  const handleButton = () => {
    setIsCardModalOpened(!isCardModalOpened);
  };

  const closeModal = () => {
    setIsCardModalOpened(false);
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock handleButton={handleButton} />
        <CardModal closeModal={closeModal} isShown={isCardModalOpened} />
      </div>
    </main>
  );
};

export default Main;
