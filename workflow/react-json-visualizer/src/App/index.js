import React, { Component } from 'react';

import Visualizer from '../components/Visualizer';

import classes from './style.module';

export const SubtitleContext = React.createContext();

const App = (props) => {
  return (
    <div className={classes.block}>
      <h1 className={classes.title}>JSON Editor</h1>
      <Visualizer title="Visualizer" />
    </div>
  );
};

export default App;
