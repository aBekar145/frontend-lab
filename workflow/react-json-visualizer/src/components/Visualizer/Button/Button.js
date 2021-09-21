import React from "react";

import classes from './Button.module'

import {ValueContext} from '../../value-context'

class Button extends React.Component {
  render() {
    let number = this.context;
    return (
      <button
        className={classes.button}
        id="text-area-button"
      >
        Build tree data {number}
      </button>
    )
  }
}

Button.contextType = ValueContext;

export default Button;