import React from 'react';

import classes from './Image.module.scss';

const Image = ({ handleButton }) => {
  return (
    <div>
      <div onClick={handleButton} className={classes.bakcroundImage}>
        <p className={classes.textNote}>
          Press on glass to get a random cocktail
        </p>
      </div>
    </div>
  );
};

export default Image;
