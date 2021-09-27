import React from "react";

import classes from './Node.module'

class Node extends React.Component {
    render() {
        return(
            <div>
                <span>Key</span>
                <span>Value</span>
            </div>
        )
    }
}

export default Node;