import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';

import classes from './App.module';

const App = () => {
  return (
    <div classes={classes.layout}>
      <Header />
      <Main />
    </div>
  );
};

export default App;