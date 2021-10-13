import React from 'react';

import Backdrop from './Backdrop';

import classes from './CommonModal.module';

const CommonModal = ({ closeModal, isShown, children }) => {
  const toggleClassName = isShown ? classes.displayBlock : classes.displayNone;

  return (
    <React.Fragment>
      <div className={classes.wrap + ' ' + toggleClassName}>{children}</div>
      {isShown ? <Backdrop onClick={closeModal} /> : null}
    </React.Fragment>
  );
};

export default CommonModal;
