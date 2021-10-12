import React from 'react';

import Backdrop from '../../UI/Backdrop';
import DrawerHeader from './DrawerHeader';

import classes from './Drawer.module';

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
