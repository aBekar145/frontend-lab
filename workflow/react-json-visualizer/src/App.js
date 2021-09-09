import React, {Component} from 'react';
import Visualizer from './components/Visualizer/Visualizer'
import classes from './App.module.scss'
import { times } from 'lodash';

class App extends Component {
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
  render() {
    return (
      <div className={classes.block}>
        <h1 className={classes.title}>{this.state.pageTitle}</h1>
        <Visualizer
         state={this.state}
        />
      </div>
    )
  }
}

export default App;