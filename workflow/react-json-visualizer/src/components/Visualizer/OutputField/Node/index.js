import React from "react";

import './Node';

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowTiles: true,
            clickableRotate: ''
        }
    }

    createValueElement = (value) => {
        if (typeof value === 'object' && value !== null){
            const lengthObject = Array.isArray(value)
                ? `[${value.length}]`
                : `{${Object.keys(value).length}}`
            return this.props.createNodeComponents(value, lengthObject)
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

    toggleComponents = () => {
        let changedClass = '';
        this.state.clickableRotate === ''
            ? changedClass = 'clickable-rotate' 
            : changedClass = ''
        this.setState({
            isShowTiles: !this.state.isShowTiles,
            clickableRotate: changedClass
        })
    } 

    render() {
        const styleClass = this.getClassByValue(this.props.value);
        return (           
            <div className="node">
            { typeof this.props.value === 'object' && this.props.value !== null
                ?   <div className={`clickable ${this.state.clickableRotate}`} onClick={this.toggleComponents}>
                        {this.props.keyObject}
                            <span>{this.props.lengthObject}</span>:
                            {this.state.isShowTiles 
                                ? <span className={styleClass}>{this.createValueElement(this.props.value)}</span> 
                                : null}</div> 
                :   <><span>{this.props.keyObject}:</span> <span className={styleClass}>{this.createValueElement(this.props.value)}</span></>  
            }
            </div>
        )
    }
}

export default Node;