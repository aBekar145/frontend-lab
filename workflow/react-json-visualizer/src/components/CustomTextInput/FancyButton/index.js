import React from "react";

import classes from './FancyButton.module.scss'

function FancyButton(props) {
    return (
        <button className={classes.button}>
            Fancy Button
        </button>
    )
}

export default FancyButton;