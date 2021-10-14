import React from 'react';
import ReactDOM from 'react-dom';
import styleClasses from 'classnames';

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
          className={styleClasses(classes.wrap, {
            [classes.close]: !isShown,
          })}
        >
          <CommonModalHeader title={title} closeModal={closeModal} />
          {children}
        </div>

        {isShown ? <Backdrop onClick={closeModal} /> : null}
      </>,
      modalRoot
    )
  );
};

export default CommonModal;
