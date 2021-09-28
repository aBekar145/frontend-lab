import React from "react";

import './Node';

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowTiles: true,
            clickableRotate: '',
            isValueObject: true
        }
    }

    // componentWillReceiveProps(prevProps) {
    //     console.log(prevProps.value);
    //     this.setState({
    //         isValueObject: typeof prevProps.value === 'object' && prevProps.value !== null
    //     })
    // }

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

    getValueLength = () => {
        const {value} = this.props;
        if (typeof value === 'object' && value !== null) {
            return Array.isArray(value)
                ? `[${value.length}]`
                : `{${Object.keys(value).length}}`
        } 
        return '';
    }

    render() {
        const styleClass = this.getClassByValue(this.props.value);
        return (           
            <div className="node">
            { typeof this.props.value === 'object' && this.props.value !== null
                ?   <div>
                        <span className={`clickable ${this.state.clickableRotate}`} onClick={this.toggleComponents}>
                            {this.props.keyObject}
                        </span>
                            <span>&nbsp;{this.getValueLength()}</span>:
                                {
                                    this.state.isShowTiles 
                                    ? <span className={`${styleClass} nestedNode`}>{this.createValueElement(this.props.value)}</span> 
                                    : null
                                }
                    </div> 
                :   <><span>{this.props.keyObject}:</span> <span className={styleClass}>{this.createValueElement(this.props.value)}</span></>  
            }
            </div>
        )
    }
}

export default Node;