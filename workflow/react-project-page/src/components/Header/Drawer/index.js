import React, { useState } from 'react';

import Backdrop from '../../UI/Backdrop';

import classes from './Drawer.module';
import DrawerHeader from './DrawerHeader';

const Drawer = ({ isToggleDrawer, onClose }) => {
  const stuleclass = [classes.wrap];
  if (!isToggleDrawer) {
    stuleclass.push(classes.close);
  }
  return (
    <React.Fragment>
      <div className={stuleclass.join(' ')}>
        <DrawerHeader onClick={onClose} />
      </div>
      {isToggleDrawer ? <Backdrop onClick={onClose} /> : null}
    </React.Fragment>
  );
};

export default Drawer;
