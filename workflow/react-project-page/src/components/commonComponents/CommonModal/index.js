import React from 'react';
import styleClasses from 'classnames';

import Backdrop from './Backdrop';
import CommonModalHeader from './CommonModalHeader';

import classes from './CommonModal.module';

const CommonModal = ({ closeModal, isShown, children, title }) => {
  return (
    <>
      <div
        className={styleClasses(classes.wrap, { [classes.close]: !isShown })}
      >
        <CommonModalHeader title={title} closeModal={closeModal} />
        {children}
      </div>
      {isShown ? <Backdrop onClick={closeModal} /> : null}
    </>
  );
};

export default CommonModal;
