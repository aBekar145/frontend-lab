import React from "react";

import classes from './Button.module'

function Button(props) {
  return (
    <button
		  onClick={props.handleClick}
			className={classes.button}
			id="text-area-button"
    >
			Build tree data
    </button>
  )
}

export default Button;