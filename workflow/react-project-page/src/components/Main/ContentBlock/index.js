import React from 'react';

import Description from './Description/Description';
import Images from './Images';

import classes from './ConstentBlock.module';

const ContentBlock = () => {
  return (
    <div className={classes.contentBlock}>
      <Description />
      <Images />
    </div>
  );
};

export default ContentBlock;
