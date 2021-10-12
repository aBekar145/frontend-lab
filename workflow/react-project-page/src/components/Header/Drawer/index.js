import React, { useState } from 'react';

import classes from './Drawer.module';

const Drawer = ({ isOpen }) => {
  const cls = [classes.wrap];
  if (!isOpen) {
    cls.push(classes.close);
  }
  return <div className={cls.join(' ')}>Drawer</div>;
};

export default Drawer;
