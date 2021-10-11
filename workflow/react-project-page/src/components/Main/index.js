import React from 'react';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';

import classes from './Main.module.scss';

const Main = () => {
  return (
    <main className={classes.main}>
      <MainTitle />
      <ContentBlock />
    </main>
  );
};

export default Main;
