import React from 'react';

import Description from './Description/Description';
import Image from './Image';

import classes from './ConstentBlock.module';

const ContentBlock = ({ handleButton }) => {
  return (
    <div className={classes.contentBlock}>
      <Description />
      <Image handleButton={handleButton} />
    </div>
  );
};

export default ContentBlock;
