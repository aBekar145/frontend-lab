import React from 'react';

import classes from './StartButton.module';

const StartButton = ({ handleButton }) => {
  return (
    <>
      <button onClick={handleButton} className={classes.button}>
        Get Started
      </button>
    </>
  );
};

export default StartButton;
