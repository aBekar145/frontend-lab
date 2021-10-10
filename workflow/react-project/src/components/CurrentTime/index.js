import React from 'react';

import classes from './CurrentTime.module';

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.seconds(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    seconds() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Current Time!</h1>
                <h2 className={classes.time}>
                    {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}

export default CurrentTime;
