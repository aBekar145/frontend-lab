import React from "react";

import classes from './Output.module';

function Output(props) {
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

export default Output;