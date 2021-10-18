import React from 'react';

import Description from './Description';
import ImagedButton from './ImagedButton';

import classes from './ContentBlock.module';

const ContentBlock = ({ openCardModal }) => {
  return (
    <div className={classes.contentBlock}>
      <Description />
      <ImagedButton openCardModal={openCardModal} />
    </div>
  );
};

export default ContentBlock;
