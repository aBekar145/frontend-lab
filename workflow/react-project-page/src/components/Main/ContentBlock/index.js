import React from 'react';

import Description from './Description/Description';
import Image from './Image';

import classes from './ConstentBlock.module';

const ContentBlock = () => {
  return (
    <div className={classes.contentBlock}>
      <Description />
      <Image />
    </div>
  );
};

export default ContentBlock;
