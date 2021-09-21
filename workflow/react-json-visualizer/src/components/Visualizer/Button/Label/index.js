import React from "react";

import {ValueContext} from '../../../value-context'

function Label(props) {
  return (
    <ValueContext.Consumer>
        {
            (context) => 
            <span>{`Build ${context.number}`}</span>
        }
    </ValueContext.Consumer>
  )
}



export default Label;