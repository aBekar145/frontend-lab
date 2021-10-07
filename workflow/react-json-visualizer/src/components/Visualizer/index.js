import React, { useState } from 'react';
import _isNull from 'lodash/isNull';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

import InputField from './InputField';
import Button from './Button';
import OutputField from './OutputField';
import ResetButton from './ResetButton';
import withClass from '../../helpers/hoc/withClass';

import classes from './Visualizer.module';

const Visualizer = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [outputField, setOutputField] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleClick = () => {
    let jsonObject = parseInput(inputValue);
    setOutputField(jsonObject);
  };

  const parseInput = (input) => {
    let jsonObject = {};

    try {
      jsonObject = typeof input === 'string' ? JSON.parse(input) : input;
    } catch (err) {
      alert(err);
    }

    return jsonObject;
  };

  const resetStateHandler = () => {
    setInputValue('');
    setOutputField('');
  };

  return (
    <>
      <InputField
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <div className={classes.buttonsWrapper}>
        <Button handleClick={handleClick} />
        <ResetButton resetStateHandler={resetStateHandler} />
      </div>
      <OutputField outputField={outputField} />
    </>
  );
};

export default withClass(Visualizer, classes.wrap);
