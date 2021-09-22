import React from "react";

import Mouse from "./Mouse";
import Cat from "./Mouse/Cat";

import classes from "./MouseTracker.module"

class MouseTracker extends React.Component {

    render() {
        return(
            <>
                <h1 className={classes.subtitle}>Move the mouse cursor!</h1>
                <Mouse render={mouse => (<Cat mouse={mouse} />)} />
            </>
        );
    }
}

export default MouseTracker;