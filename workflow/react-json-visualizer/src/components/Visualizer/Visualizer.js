import React from 'react';
import _isNull from 'lodash/isNull';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

import InputField from './InputField/InputField';
import Button from './Button/Button';
import OutputField from './OutputField/OutputField';
import ResetButton from './ResetButton/ResetButton';

import classes from './Visualizer.module';

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            outputField: ''
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    handleInputChange = ({ target }) => {
        this.setState({
            inputValue: target.value,
        });
    };

    handleClick = () => {
       let jsonObject = this.parseInput(this.state.inputValue);
       this.setState({
            outputField: jsonObject
       })
    };

    parseInput = (input) => {
        let jsonObject = {};
        jsonObject = typeof input === 'string' ? JSON.parse(input) : input;
        return jsonObject;
    }

    resetStateHandler = () => {
        console.log('clicked')
        // this.setState({
        //     inputValue: '',
        //     outputField: ''
        // })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }else {
            return (
                <div className={classes.wrap}>
                    <InputField handleInputChange={this.handleInputChange} inputValue={this.state.inputValue}/>
                    <div className={classes.buttonsWrapper}>
                        <Button handleClick={this.handleClick}/>
                        <ResetButton resetStatedHandler={this.resetStateHandler}/>
                    </div>
                    <OutputField outputField={this.state.outputField}/>
                </div>
            );
        }
    }
}

export default Visualizer;
