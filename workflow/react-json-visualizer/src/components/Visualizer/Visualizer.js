import React from 'react';
import _isNull from 'lodash/isNull';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';

import Input from './Input/Input';
import Button from './Button/Button';
import Output from './Output/Output';

import classes from './Visualizer.module';

class Visualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleInputChange = ({ target }) => {
        this.setState({
            inputValue: target.value,
        });
    };

    handleClick = () => {
        let out = this.props.input;
        this.setState({
            outResult: out,
        });
    };

    render() {
        // const fieldInput = this.props.state.input;
        // const fieldOutResult = this.props.state.outResult;
        // const button = this.props.state.submitButton;

        // console.log(fieldInput, fieldOutResult, button);

        // const getClassByValue = (value) => {
        //     const typeValue = typeof value;
        //     const key = _isNull(value) ? value : typeValue;
        //     const dataObject = {
        //         number: 'text-color-red',
        //         boolean: 'text-color-orange',
        //         string: 'text-color-green',
        //         null: 'text-color-blue',
        //         default: 'text-color-black',
        //     };

        //     return dataObject[key] || dataObject.default;
        // };

        // const jsonToHtml = (data) => {
        //     const json = parseInput(data);
        //     const htmlArray = [`<ul style="display: block">`];

        //     for (let [key, value] of Object.entries(json)) {
        //         if (_isObject(value)) {
        //             const lengthObject = _isArray(value)
        //                 ? `[${value.length}]`
        //                 : `{${Object.keys(value).length}}`;
        //             htmlArray.push(
        //                 `<li class="clickable">${key} ${lengthObject}:`
        //             );
        //             htmlArray.push(jsonToHtml(value));
        //         } else {
        //             const styleClass = getClassByValue(value);
        //             htmlArray.push(
        //                 `<li>${key}:
        //             <span class="${styleClass}">${value}</span>
        //         </li>`
        //             );
        //         }
        //     }

        //     htmlArray.push('</ul>');
        //     return htmlArray.join('');
        // };

        // const parseInput = (input) => {
        //     let json = {};

        //     try {
        //         json = _isString(input) ? JSON.parse(input) : input;
        //     } catch (err) {
        //         alert(err);
        //     }

        //     return json;
        // };

        // const setClickListeners = () => {
        //     const clickableElements =
        //         document.getElementsByClassName('clickable');

        //     Array.from(clickableElements).forEach((element) => {
        //         element.onclick = () => {
        //             const node = element.lastChild;

        //             if (node.style?.display === 'block') {
        //                 node.style.display = 'none';
        //                 element.classList.toggle('clickable-rotate');
        //             } else {
        //                 node.style.display = 'block';
        //                 element.classList.toggle('clickable-rotate');
        //             }
        //         };
        //     });
        // };

        // const appendJSON = (valueInput) => {
        //     const jsonHTML = jsonToHtml(valueInput);
        //     fieldOutResult.innerHTML = jsonHTML;

        //     setClickListeners();
        // };

        // const handleInput = (event) => {
        //     let body = event.target.value;
        //     this.input = body;
        // };

        // const handleClick = () => {
        //     appendJSON(this.input);
        //     console.log(this.input);
        //     let out = this.input;

        //     this.setState({
        //         outResult: out,
        //     });
        // };

        // button.addEventListener('click', () => appendJSON(fieldInput.value));

        return (
            <div className={classes.wrap}>
                <Input handleInputChange={this.handleInputChange} inputValue={this.state.inputValue}/>

                <Button handleClick={this.handleClick}/>

                <Output />
            </div>
        );
    }
}

export default Visualizer;
