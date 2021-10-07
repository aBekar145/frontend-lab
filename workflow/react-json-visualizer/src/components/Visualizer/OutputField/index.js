import React from 'react';

import Node from './Node';

import classes from './OutputField.module';

const OutputField = (props) => {
  const generateKey = (pre) => {
    let key = `${pre}_${new Date().getTime()}`;

    return key;
  };

  const createNodeComponents = (object) => {
    const nodeComponents = Object.entries(object).map(([key, value]) => (
      <Node
        key={generateKey(key)}
        keyObject={key}
        value={value}
        createNodeComponents={createNodeComponents}
      />
    ));

    return nodeComponents;
  };

  return (
    <>
      <div className={classes.sizeBlock}>
        <h3 className={classes.subtitle}>Output of finished data:</h3>
        <div className={classes.outputField}>
          {createNodeComponents(props.outputField)}
        </div>
      </div>
    </>
  );
};

export default OutputField;
