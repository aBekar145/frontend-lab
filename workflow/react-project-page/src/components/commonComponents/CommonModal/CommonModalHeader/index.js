import React from 'react';

import CloseButton from './CloseButton';

import classes from './CommonModalHeader.module.scss';

const CommonModalHeader = ({ onClick, title }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.subtitle}>{title}</h2>
      <CloseButton onClick={onClick} />
    </div>
  );
};

export default CommonModalHeader;
