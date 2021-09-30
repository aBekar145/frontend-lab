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

// class Visualizer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: '',
//       outputField: '',
//     };
//   }

//   handleInputChange = ({ target }) => {
//     this.setState({
//       inputValue: target.value,
//     });
//   };

//   handleClick = () => {
//     let jsonObject = this.parseInput(this.state.inputValue);
//     this.setState({
//       outputField: jsonObject,
//     });
//   };

//   parseInput = (input) => {
//     let jsonObject = {};

//     try {
//       jsonObject = typeof input === 'string' ? JSON.parse(input) : input;
//     } catch (err) {
//       alert(err);
//     }

//     return jsonObject;
//   };

//   resetStateHandler = () => {
//     this.setState({
//       inputValue: '',
//       outputField: '',
//     });
//   };

//   render() {
//     return (
//       <>
//         <InputField
//           handleInputChange={this.handleInputChange}
//           inputValue={this.state.inputValue}
//         />
//         <div className={classes.buttonsWrapper}>
//           <Button handleClick={this.handleClick} />
//           <ResetButton resetStateHandler={this.resetStateHandler} />
//         </div>
//         <OutputField outputField={this.state.outputField} />
//       </>
//     );
//   }
// }

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
