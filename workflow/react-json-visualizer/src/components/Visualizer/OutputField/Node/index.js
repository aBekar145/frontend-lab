import React, { useState } from 'react';

import './Node';

const Node = ({ value, keyObject, createNodeComponents}) => {
  const [isValueShown, setIsValueShown] = useState(true);
  const [isValueObject, setisValueObject] = useState(true);

  //   static getDerivedStateFromProps(props) {
  //     if (typeof value === 'object' && value !== null) {
  //       return {
  //         isValueObject: true,
  //       };
  //     } else {
  //       return {
  //         isValueObject: false,
  //       };
  //     }
  //   }

  const createValueElement = (value) => {
    if (typeof value === 'object' && value !== null) {
      return createNodeComponents(value);
    } else {
      return `${value}`;
    }
  };

  const getClassByValue = (value) => {
    const typeValue = typeof value;
    const key = value === null ? value : typeValue;
    const dataObject = {
      number: 'text-color-red',
      boolean: 'text-color-orange',
      string: 'text-color-green',
      null: 'text-color-blue',
      default: 'text-color-black',
    };

    return dataObject[key] || dataObject.default;
  };

  const toggleComponents = () => {
    setIsValueShown(!isValueShown);
  };

  const getValueLength = () => {

    if (typeof value === 'object' && value !== null) {
      return Array.isArray(value)
        ? `[${value.length}]`
        : `{${Object.keys(value).length}}`;
    }
    return '';
  };

  const styleClass = getClassByValue(value);
  let nestedNode;
  let clickableRotate = '';

  if (isValueShown) {
    nestedNode = (
      <span className={`${styleClass} nestedNode`}>
        {createValueElement(value)}
      </span>
    );
  } else {
    clickableRotate = 'clickable-rotate';
    nestedNode = null;
  }

  return (
    <div className="node">
      {typeof value === 'object' && value !== null ? (
        <div>
          <span
            className={`clickable ${clickableRotate}`}
            onClick={toggleComponents}
          >
            {keyObject}
          </span>
          <span>&nbsp;{getValueLength()}</span>:{nestedNode}
        </div>
      ) : (
        <>
          <span>{keyObject}:</span>{' '}
          <span className={styleClass}>{createValueElement(value)}</span>
        </>
      )}
    </div>
  );
};

export default Node;
