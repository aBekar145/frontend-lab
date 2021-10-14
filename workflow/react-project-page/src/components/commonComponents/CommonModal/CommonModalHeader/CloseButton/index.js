import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './CloseButton.module.scss';

const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      <FontAwesomeIcon className={classes.icon} icon={faTimes} />
    </button>
  );
};

export default CloseButton;
