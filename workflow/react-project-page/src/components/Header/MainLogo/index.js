import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';

import classes from './MainLogo.module';

const MainLogo = () => {
  return (
    <div className={classes.wrapper}>
      <FontAwesomeIcon className={classes.icon} icon={faCocktail} />
      <span className={classes.textLogo}>Cocktail App</span>
    </div>
  );
};

export default MainLogo;
