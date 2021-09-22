import React from "react";

import FancyButton from "./FancyButton";

import classes from "./CustomTextInput.module"

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        // this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
           <div>
                <input className={classes.inputField} type="text" ref={this.textInput}/>
                <FancyButton />
           </div>
        )
    }

}

export default CustomTextInput;