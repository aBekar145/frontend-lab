import React from "react";

import './Node';

class Node extends React.Component {

    createValueElement = (value) => {
        if (typeof value === 'object' && value !== null){
            return this.props.createNodeComponents(value)
        } else {
            return `${value}`;
        }
    }

    getClassByValue = (value) => {
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

    setClickHandler = () => {
        const clickableElements = document.getElementsByClassName('clickable');
        Array.from(clickableElements).forEach((element) => {
            element.onclick = () => {
                const node = element.lastChild;
                if (node.style?.display === 'block') {
                    node.style.display = 'none';
                    element.classList.toggle('clickable-rotate');
                } else {
                    node.style.display = 'block';
                    element.classList.toggle('clickable-rotate');
                }
            };
        });
    };

    render() {
        const styleClass = this.getClassByValue(this.props.value);
        return (           
            <div className="node">
            { typeof this.props.value === 'object' && this.props.value !== null
                ?   <div className="clickable" onClick={this.setClickHandler}>{this.props.keyObject}:<span className={styleClass}>{this.createValueElement(this.props.value)}</span></div> 
                :   <><span>{this.props.keyObject}:</span> <span className={styleClass}>{this.createValueElement(this.props.value)}</span></>  
            }
            </div>
        )
    }
}

export default Node;