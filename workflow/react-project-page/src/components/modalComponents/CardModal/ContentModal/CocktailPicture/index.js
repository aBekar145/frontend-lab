import React from 'react';

import classes from './CocktailPicture.module.scss';

const CocktailPicture = ({ urlImg }) => {
  return (
    <div className={classes.wrap}>
      <img src={urlImg} />
    </div>
  );
};

export default CocktailPicture;
