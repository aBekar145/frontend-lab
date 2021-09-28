import React from "react";

import classes from './ResetButton.module.scss'

function ResetButton(props) {
    return (
          <button
            onClick={props.resetStateHandler}
            className={classes.button}
          >
            Reset
          </button>
    )
  }
  
  export default ResetButton;