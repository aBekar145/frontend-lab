import React from "react";

import Subtitle from "./Subtitle";

import classes from './OutputField.module';

class OutputField extends React.Component {

  render() {
    return(
      <>
        <div className={classes.sizeBlock}>
          <h3 className={classes.subtitle}>
              Output of finished data:
          </h3>
          <div className={classes.outputField} id="show-here">
            <Subtitle />
          </div>
        </div>
      </>
    )
  }
}

export default OutputField;