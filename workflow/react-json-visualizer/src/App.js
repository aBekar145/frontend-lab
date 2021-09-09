import React, {Component} from 'react';
import Visualizer from './components/Visualizer/Visualizer'
import classes from './App.module.scss'
import { times } from 'lodash';

class App extends Component {

  render() {
    return (
      <div className={classes.block}>
        <h1 className={classes.title}>Hello</h1>
        <Visualizer
         state={this.state}
        />
      </div>
    )
  }
}

export default App;