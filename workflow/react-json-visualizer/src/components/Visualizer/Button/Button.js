import React from "react";

import classes from './Button.module'



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
          Build tree data
        </button>
  )
}

export default Button;