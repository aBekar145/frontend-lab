import React from 'react';

import CurrentTime from '../components/CurrentTime';

import classes from './App.module';

const App = () => {
    return (
        <div className={classes.layout}>
            <CurrentTime />
        </div>
    );
};

export default App;
