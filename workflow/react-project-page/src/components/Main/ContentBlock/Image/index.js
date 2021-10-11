import React from 'react';

import classes from './Image.module.scss';

const Image = () => {
  return (
    <div>
      <div>
        <div className={classes.bakcroundImage}></div>
      </div>
      <p>Press on glass to get a random cocktail</p>
    </div>
  );
};

export default Image;
