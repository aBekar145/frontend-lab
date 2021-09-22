import React from "react";

import classes from './InputField.module'

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className={classes.sizeBlock}>
        <label className={classes.subtitle} htmlFor="text-area">
            Add JSON files:
        </label>
        <textarea
            ref={this.textInput}
            id="text-area"
            className={classes.textareaInputField}
        />
      </div>
    )
  }
}

export default InputField;