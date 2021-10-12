import React from 'react';
import Backdrop from '../../UI/Backdrop';

import classes from './ContentModal.module.scss';
import ContentModalHeader from './ContentModalHeader';

const ContentModule = ({ isToggleDrawer, onClose }) => {
  const stuleclass = [classes.wrap];
  if (!isToggleDrawer) {
    stuleclass.push(classes.close);
  }
  return (
    <React.Fragment>
      <div className={stuleclass.join(' ')}>
        <ContentModalHeader isToggleDrawer={isToggleDrawer} onClick={onClose} />
      </div>
      {isToggleDrawer ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default ContentModule;
