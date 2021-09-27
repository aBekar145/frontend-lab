import React from "react";

import './Node';

class Node extends React.Component {

    createValueElement = (value) => {
        if (typeof value === 'object' && value !== null) {
            return this.props.createNodeComponents(value)
        } else {
            return value;
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

    render() {
        const styleClass = this.getClassByValue(this.props.value);
        return (           
            <div className="node">
            {(typeof this.props.value === 'object' && this.props.value !== null)  
                ? <span className="clickable">{this.props.keyObject}:</span> 
                : <span>{this.props.keyObject}:</span>} 
                <span className={styleClass}>{this.createValueElement(this.props.value)}</span>
            </div>
        )
    }
}

export default Node;