import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import classes from './App.module';

const App = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <div id="modal-root"></div>
    </div>
  );
};

export default App;
