import React, { useState } from 'react';

import './Node';

const Node = (props) => {
  const [isValueShown, setIsValueShown] = useState(true);
  const [isValueObject, setisValueObject] = useState(true);

  //   static getDerivedStateFromProps(props) {
  //     if (typeof props.value === 'object' && props.value !== null) {
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
    if (typeof props.value === 'object' && props.value !== null) {
      return props.createNodeComponents(value);
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
    const { value } = props;

    if (typeof props.value === 'object' && props.value !== null) {
      return Array.isArray(value)
        ? `[${value.length}]`
        : `{${Object.keys(value).length}}`;
    }
    return '';
  };

  const styleClass = getClassByValue(props.value);
  let nestedNode;
  let clickableRotate = '';

  if (isValueShown) {
    nestedNode = (
      <span className={`${styleClass} nestedNode`}>
        {createValueElement(props.value)}
      </span>
    );
  } else {
    clickableRotate = 'clickable-rotate';
    nestedNode = null;
  }

  return (
    <div className="node">
      {typeof props.value === 'object' && props.value !== null ? (
        <div>
          <span
            className={`clickable ${clickableRotate}`}
            onClick={toggleComponents}
          >
            {props.keyObject}
          </span>
          <span>&nbsp;{getValueLength()}</span>:{nestedNode}
        </div>
      ) : (
        <>
          <span>{props.keyObject}:</span>{' '}
          <span className={styleClass}>{createValueElement(props.value)}</span>
        </>
      )}
    </div>
  );
};

export default Node;
