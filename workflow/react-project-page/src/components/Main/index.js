import React, { useState } from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import ContentModule from './ContentModal';

import classes from './Main.module.scss';

const Main = () => {
  const [isToggleDrawer, setIsToggleDrawer] = useState(false);

  const handleButton = () => {
    setIsToggleDrawer(!isToggleDrawer);
  };

  const isCloseHandler = () => {
    setIsToggleDrawer(false);
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock handleButton={handleButton} />
        <ContentModule
          isToggleDrawer={isToggleDrawer}
          onClose={isCloseHandler}
        />
      </div>
    </main>
  );
};

export default Main;
