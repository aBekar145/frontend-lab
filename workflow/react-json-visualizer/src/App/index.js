import React, { Component } from 'react';

import Visualizer from '../components/Visualizer/Visualizer';

import classes from './style.module';

class App extends Component {
    render() {
        return (
            <div className={classes.block}>
                <h1 className={classes.title}>JSON Editor</h1>
                <Visualizer />
            </div>
        );
    }
}

export default App;
