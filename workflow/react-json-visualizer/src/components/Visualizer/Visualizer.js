import React from 'react';
import _isNull from 'lodash/isNull';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

import InputField from './InputField/InputField';
import Button from './Button/Button';
import OutputField from './OutputField/OutputField';

import classes from './Visualizer.module';

export const InputValueContext = React.createContext();

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            outputField: '',
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

    parseInput = (input)=> {
        let json = {};
        json = typeof input === 'string' ? JSON.parse(input) : input;
        return json;
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>
        }else {
            return (
                <div className={classes.wrap}>
                    <InputField handleInputChange={this.handleInputChange} inputValue={this.state.inputValue}/>
                    <Button handleClick={this.handleClick}/>
                    <OutputField outputField={this.state.outputField}/>
                </div>
            );
        }
    }
}

export default Visualizer;
