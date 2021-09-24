import React from "react";

import classes from './InputField.module'

import {InputValueContext} from '../Visualizer'

function InputField(props) {
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

export default InputField;