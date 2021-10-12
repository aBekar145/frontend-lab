import React from 'react';
import Backdrop from '../../UI/Backdrop';

import classes from './ContentModal.module.scss';
import ContentModalHeader from './ContentModalHeader';

const ContentModule = ({ isToggleDrawer, onClick, onClose }) => {
  const stuleclass = [classes.wrap];
  if (!isToggleDrawer) {
    stuleclass.push(classes.close);
  }
  return (
    <React.Fragment>
      <div className={stuleclass.join(' ')}>
        <ContentModalHeader isToggleDrawer={isToggleDrawer} onClick={onClick} />
      </div>
      {isToggleDrawer ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default ContentModule;
