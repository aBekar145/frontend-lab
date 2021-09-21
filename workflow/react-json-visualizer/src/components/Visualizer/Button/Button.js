import React from "react";

import Label from "./Label";

import classes from './Button.module'

import {ValueContext} from '../../value-context'

// class Button extends React.Component {
//   render() {
//     let number = this.context;
//     return (
//       <button
//         className={classes.button}
//         id="text-area-button"
//       >
//         Build tree data {number}
//       </button>
//     )
//   }
// }

function Button(props) {
  return (
        <button
          className={classes.button}
          id="text-area-button"
        >
          <Label />
        </button>
  )
}

Button.contextType = ValueContext;

export default Button;