import React, { useState } from 'react';
import CommonModal from '../components/commonComponents/CommonModal';

import Header from '../components/Header';
import Main from '../components/Main';

import classes from './App.module';

const App = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <CommonModal />
    </div>
  );
};

export default App;
