import React from 'react';

import classes from './CloseButton.module.scss';

const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      <i className="fas fa-times icon"></i>
    </button>
  );
};

export default CloseButton;
