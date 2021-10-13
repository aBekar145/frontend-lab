import React from 'react';

import CloseButton from './CloseButton';

import classes from './AuthenticationModalHeader.module.scss';

const AuthenticationModalHeader = ({ closeModal, title }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.subtitle}>{title}</h2>
      <CloseButton onClick={closeModal} />
    </div>
  );
};

export default AuthenticationModalHeader;
