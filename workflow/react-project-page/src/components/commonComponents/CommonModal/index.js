import React from 'react';
import styleClasses from 'classnames';

import Backdrop from './Backdrop';

import classes from './CommonModal.module';

const CommonModal = ({ closeModal, isShown, children }) => {
  return (
    <React.Fragment>
      <div
        className={styleClasses(classes.wrap, { [classes.close]: !isShown })}
      >
        {children}
      </div>
      {isShown ? <Backdrop onClick={closeModal} /> : null}
    </React.Fragment>
  );
};

export default CommonModal;
