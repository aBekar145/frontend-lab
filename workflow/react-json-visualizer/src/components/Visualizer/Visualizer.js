import React from "react";
import classes from './Visualizer.module.scss'

class Visualizer extends React.Component {

  handleInput = (event) => {
    this.setState({pageTitle: event.target.value})
  }
  render() {

    return (
      <div className={classes.wrap}>
          <div className={classes.sizeBlock}>
              <label className={classes.subtitle} htmlFor ="text-area">{this.props.fieldInputSubtitle}</label>
              <textarea onChange={this.handleInput} id="text-area" className={classes.textareaInputField}></textarea>
          </div>

          <button className={classes.button} id="text-area-button">{this.props.submitButton}</button>

          <div className={classes.sizeBlock}>
              <h3 className={classes.subtitle}>{this.props.fieldShowSubtitle}</h3>
              <div className={classes.outputField} id="show-here"></div>
           </div>
      </div>
    )
  }
}

export default Visualizer;