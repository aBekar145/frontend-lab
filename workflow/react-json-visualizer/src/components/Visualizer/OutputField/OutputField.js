import React from "react";

import classes from './OutputField.module';

function OutputField(props) {
  return(
    <div className={classes.sizeBlock}>
      <h3 className={classes.subtitle}>
          Output of finished data:
      </h3>
      <div className={classes.outputField} id="show-here">
      </div>
    </div>
  )
}

export default OutputField;