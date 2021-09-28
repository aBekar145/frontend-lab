import React, { Component } from 'react';

import Visualizer from '../components/Visualizer';

import classes from './style.module';

export const SubtitleContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtitle: 'Result is here:'
        }
    }
    render() {
        return (
            <div className={classes.block}>
                <h1 className={classes.title}>JSON Editor</h1>
                <SubtitleContext.Provider value={this.state}>
                    <Visualizer />
                </SubtitleContext.Provider>
            </div>
        );
    }
}

export default App;
