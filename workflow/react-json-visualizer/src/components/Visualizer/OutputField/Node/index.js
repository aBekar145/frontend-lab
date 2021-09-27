import React from "react";

import classes from './Node.module'

class Node extends React.Component {
    render() {
        return(
            <div>
                <span>{this.props.objectKey}:</span>&nbsp;
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default Node;