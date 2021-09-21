import React, { Fragment} from "react";

import classes from './OutputField.module';

class OutputField extends React.Component {

  render() {
    return(
      <Fragment>
        <div className={classes.sizeBlock}>
          <h3 className={classes.subtitle}>
              Output of finished data:
          </h3>
          <div className={classes.outputField} id="show-here">
          </div>
        </div>
      </Fragment>
    )
  }
}

export default OutputField;