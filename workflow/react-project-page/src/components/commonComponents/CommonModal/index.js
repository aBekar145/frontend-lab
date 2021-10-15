import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import CommonModalHeader from './CommonModalHeader';

import classes from './CommonModal.module';

const CommonModal = ({ closeModal, isShown, children, title }) => {
  const modalRoot = document.getElementById('modal-root');

  return (
    isShown &&
    ReactDOM.createPortal(
      <>
        <div
          className={classes.modal}
        >
          <CommonModalHeader title={title} closeModal={closeModal} />
          {children}
        </div>

        <Backdrop onClick={closeModal} />
      </>,
      modalRoot
    )
  );
};

export default CommonModal;
