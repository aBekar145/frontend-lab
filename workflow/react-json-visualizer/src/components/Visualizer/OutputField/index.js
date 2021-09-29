import React from 'react';

import Node from './Node';

import classes from './OutputField.module';

class OutputField extends React.Component {
  generateKey = (pre) => {
    let key = `${pre}_${new Date().getTime()}`;

    return key;
  };

  createNodeComponents = (object) => {
    const nodeComponents = Object.entries(object).map(([key, value]) => (
      <Node
        key={this.generateKey(key)}
        keyObject={key}
        value={value}
        createNodeComponents={this.createNodeComponents}
      />
    ));

    return nodeComponents;
  };

  render() {
    return (
      <>
        <div className={classes.sizeBlock}>
          <h3 className={classes.subtitle}>Output of finished data:</h3>
          <div className={classes.outputField}>
            {this.createNodeComponents(this.props.outputField)}
          </div>
        </div>
      </>
    );
  }
}

export default OutputField;
