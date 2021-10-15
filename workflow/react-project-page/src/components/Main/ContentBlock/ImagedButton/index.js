import React from 'react';

import classes from './ImagedButton.module.scss';

const ImagedButton = ({ openCardModal }) => {
  return (
    <div>
      <div onClick={openCardModal} className={classes.bakcroundImage}>
        <p className={classes.textNote}>
          Press on glass to get a random cocktail
        </p>
      </div>
    </div>
  );
};

export default ImagedButton;