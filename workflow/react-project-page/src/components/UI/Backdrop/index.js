import React from 'react';

import classes from './Backdrop.module';

const Backdrop = (props) => (
  <div className={classes.wrapper} onClick={props.onClick}></div>
);

export default Backdrop;
