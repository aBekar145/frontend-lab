import React, {Component} from 'react';
import Visualizer from './components/Visualizer/Visualizer'
import classes from './App.module.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'JSON Editor'
    }
  }
  render() {
    return (
      <div className={classes.block}>
        <h1 className={classes.title}>{this.state.pageTitle}</h1>
        <Visualizer />
      </div>
    )
  }
}

export default App;