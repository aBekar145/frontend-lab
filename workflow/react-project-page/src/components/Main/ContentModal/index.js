import React from 'react';

import ContentModalHeader from './ContentModalHeader';

import classes from './ContentModal.module.scss';
import Backdrop from '../../commonComponents/Backdrop';

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
