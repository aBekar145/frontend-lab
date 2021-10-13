import React from 'react';

import classes from './AuthorizationButton.module';

const AuthorizationButton = ({ handleButton }) => {
  return (
    <>
      <button onClick={handleButton} className={classes.button}>
        Get Started
      </button>
    </>
  );
};

export default AuthorizationButton;
