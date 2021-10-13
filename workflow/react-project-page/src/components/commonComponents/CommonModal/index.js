import React from 'react';

import classes from './Drawer.module';
import Backdrop from '../Backdrop';

const CommonModal = ({ isToggleDrawer, onClose }) => {
  const stuleclass = [classes.wrap];

  if (!isToggleDrawer) {
    stuleclass.push(classes.close);
  }

  return (
    <React.Fragment>
      <div className={stuleclass.join(' ')}>
        <CommonModalHeader onClick={onClose} />
      </div>
      {isToggleDrawer ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default CommonModal;
