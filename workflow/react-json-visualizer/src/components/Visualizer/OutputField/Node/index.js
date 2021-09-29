import React from 'react';

import './Node';

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValueShown: true,
      isValueObject: true,
    };
  }

  static getDerivedStateFromProps(props) {
    if (typeof props.value === 'object' && props.value !== null) {
      return {
        isValueObject: true,
      };
    } else {
      return {
        isValueObject: false,
      };
    }
  }

  createValueElement = (value) => {
    if (this.state.isValueObject) {
      return this.props.createNodeComponents(value);
    } else {
      return `${value}`;
    }
  };

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
    this.setState({
      isValueShown: !this.state.isValueShown,
    });
  };

  getValueLength = () => {
    const { value } = this.props;

    if (this.state.isValueObject) {
      return Array.isArray(value)
        ? `[${value.length}]`
        : `{${Object.keys(value).length}}`;
    }
    return '';
  };

  render() {
    const styleClass = this.getClassByValue(this.props.value);
    let nestedNode;
    let clickableRotate = '';

    if (this.state.isValueShown) {
      nestedNode = (
        <span className={`${styleClass} nestedNode`}>
          {this.createValueElement(this.props.value)}
        </span>
      );
    } else {
      clickableRotate = 'clickable-rotate';
      nestedNode = null;
    }

    return (
      <div className="node">
        {this.state.isValueObject ? (
          <div>
            <span
              className={`clickable ${clickableRotate}`}
              onClick={this.toggleComponents}
            >
              {this.props.keyObject}
            </span>
            <span>&nbsp;{this.getValueLength()}</span>:{nestedNode}
          </div>
        ) : (
          <>
            <span>{this.props.keyObject}:</span>{' '}
            <span className={styleClass}>
              {this.createValueElement(this.props.value)}
            </span>
          </>
        )}
      </div>
    );
  }
}

export default Node;
