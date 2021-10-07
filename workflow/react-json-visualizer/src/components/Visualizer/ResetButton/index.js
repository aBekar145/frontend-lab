import React from 'react';

import classes from './ResetButton.module.scss';

const ResetButton = (props) => {
  return (
    <button onClick={props.resetStateHandler} className={classes.button}>
      Reset
    </button>
  );
};

export default ResetButton;
