import React from "react";

import Subtitle from "./Subtitle";
import Node from "./Node"

import classes from './OutputField.module';

class OutputField extends React.Component {
  
  createNodeComponents = (object) => {
    const nodeComponents = 
      Object.entries(object)
      .map(([key, value], index) => 
      <Node 
        index={index}
        key={index} 
        keyObject={key} 
        value={value} 
        createNodeComponents={this.createNodeComponents} 
      />); 

    return nodeComponents;
  }

  render() {
    return(
      <>
        <div className={classes.sizeBlock}>
          <h3 className={classes.subtitle}>
            Output of finished data:
          </h3>
          <div className={classes.outputField} id="show-here">
            <Subtitle />
            {this.createNodeComponents(this.props.outputField)}
          </div>
        </div>
      </>
    )
  }
}

export default OutputField;