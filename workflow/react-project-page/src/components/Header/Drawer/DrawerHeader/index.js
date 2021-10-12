import React from 'react';

import CloseButton from './CloseButton';

import classes from './DrawerHeader.module.scss';

const DrawerHeader = ({ onClick }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.subtitle}>Authentication</h2>
      <CloseButton onClick={onClick} />
    </div>
  );
};

export default DrawerHeader;
