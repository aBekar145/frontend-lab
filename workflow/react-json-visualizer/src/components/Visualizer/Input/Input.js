import React from "react";

import classes from './Input.module'

function Input(props) {
  return (
    <div className={classes.sizeBlock}>
      <label className={classes.subtitle} htmlFor="text-area">
          Add JSON files:
      </label>
      <textarea
          onChange={props.handleInputChange}
          id="text-area"
          className={classes.textareaInputField}
      >
      </textarea>
    </div>
  )
}

export default Input;