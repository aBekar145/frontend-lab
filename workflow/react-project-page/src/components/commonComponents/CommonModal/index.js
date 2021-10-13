import React, { useState } from 'react';

import Backdrop from './Backdrop';
import CommonModalHeader from './CommonModalHeader';

import classes from './CommonModal.module';

const CommonModal = ({ closeModal, isShown, title }) => {
  const stuleclass = [classes.wrap];

  if (!isShown) {
    stuleclass.push(classes.close);
  }

  return (
    <React.Fragment>
      <div className={stuleclass.join(' ')}>
        <CommonModalHeader onClick={closeModal} title={title} />
      </div>
      {isShown ? <Backdrop onClick={closeModal} /> : null}
    </React.Fragment>
  );
};

export default CommonModal;
