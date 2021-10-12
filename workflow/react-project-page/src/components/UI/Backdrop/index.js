import React from 'react';

import classes from './Backdrop.module';

const Backdrop = ({ onClick }) => (
  <div className={classes.wrapper} onClick={onClick}></div>
);

export default Backdrop;
