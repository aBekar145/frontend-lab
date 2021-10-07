import React, { useEffect, useRef } from 'react';

import classes from './InputField.module';

const InputField = (props) => {
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div className={classes.sizeBlock}>
      <label className={classes.subtitle} htmlFor="text-area">
        Add JSON files:
      </label>

      <textarea
        value={props.inputValue}
        onChange={props.handleInputChange}
        ref={textInput}
        id="text-area"
        className={classes.textareaInputField}
      />
    </div>
  );
};

export default InputField;
