import React from 'react';

import classes from './Image.module.scss';

const Image = () => {
  return (
    <div>
      <div className={classes.bakcroundImage}>
        <p className={classes.textNote}>
          Press on glass to get a random cocktail
        </p>
      </div>
    </div>
  );
};

export default Image;
