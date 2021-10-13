import React from 'react';

import Description from './Description';
import ImagedButton from './ImagedButton';

import classes from './ContentBlock.module';

const ContentBlock = ({ handleButton }) => {
  return (
    <div className={classes.contentBlock}>
      <Description />
      <ImagedButton handleButton={handleButton} />
    </div>
  );
};

export default ContentBlock;
