import React from "react";

import {SubtitleContext} from '../../../../App'

import classes from './Subtitle.module'

function Subtitle(props) {
    return (
        <SubtitleContext.Consumer>
            {({subtitle}) => <h3 className={classes.subtitle}>{subtitle}</h3>}
        </SubtitleContext.Consumer>
    )
}

export default Subtitle;