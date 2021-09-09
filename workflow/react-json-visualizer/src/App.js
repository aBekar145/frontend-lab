import React, {Component} from 'react';
import Visualizer from './components/Visualizer/Visualizer'
import classes from './App.module.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'JSON Editor',
      fieldInputSubtitle: 'Add JSON files:',
      fieldShowSubtitle: 'Output of finished data:',
      submitButton: 'Build tree data'
    }
  }
  render() {
    return (
      <div className={classes.block}>
        <h1 className={classes.title}>{this.state.pageTitle}</h1>
        <Visualizer
          fieldInputSubtitle={this.state.fieldInputSubtitle}
          fieldShowSubtitle={this.state.fieldShowSubtitle}
          submitButton={this.state.submitButton}
        />
      </div>
    )
  }
}

export default App;