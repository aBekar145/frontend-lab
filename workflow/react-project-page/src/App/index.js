import React from 'react';

import CommonModal from '../components/commonComponents/CommonModal';
import Portal from '../components/commonComponents/Portal';
import Header from '../components/Header';
import Main from '../components/Main';

import classes from './App.module';

const App = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Portal>
        <CommonModal />
      </Portal>
    </div>
  );
};

export default App;
