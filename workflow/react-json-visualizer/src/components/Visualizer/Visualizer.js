import React from "react";
import classes from './Visualizer.module.scss'

class Visualizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'JSON Editor',
      fieldInputSubtitle: 'Add JSON files:',
      fieldShowSubtitle: 'Output of finished data:',
      submitButton: 'Build tree data',
      outResult: null,
      input: null
    }
  }

  handleInput = (event) => {
    let body = event.target.value
    this.input = body;
  }

  handleClick = () => {
    let out = this.input;
    this.setState({
      outResult: out
    })
  }

  render() {

    return (
      <div className={classes.wrap}>
          <div className={classes.sizeBlock}>
              <label className={classes.subtitle} htmlFor ="text-area">{this.state.fieldInputSubtitle}</label>
              <textarea onChange={this.handleInput} id="text-area" className={classes.textareaInputField}></textarea>
          </div>

          <button onClick={this.handleClick.bind(this)} className={classes.button} id="text-area-button">{this.state.submitButton}</button>

          <div className={classes.sizeBlock}>
              <h3 className={classes.subtitle}>{this.state.fieldShowSubtitle}</h3>
              <div className={classes.outputField} id="show-here">{this.state.outResult}</div>
           </div>
      </div>
    )
  }
}

export default Visualizer;