import React from 'react';

import classes from './ImagedButton.module.scss';

const ImagedButton = ({ handleButton }) => {
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

export default ImagedButton;
