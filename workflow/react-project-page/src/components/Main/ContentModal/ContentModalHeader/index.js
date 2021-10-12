import React from 'react';
import CloseButton from './CloseButton';

import classes from './ContentModalHeader.module.scss';

const ContentModalHeader = ({ onClick }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.subtitle}>Random Coctail</h2>
      <CloseButton onClick={onClick} />
    </div>
  );
};

export default ContentModalHeader;
