import React, { useEffect, useState } from 'react';

import classes from './CurrentTime.module';

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString()
    );

    useEffect(() => {
        const seconds = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(seconds);
    }, []);

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Current Time!</h1>
            <h2 className={classes.time}>{currentTime}</h2>
        </div>
    );
};

export default CurrentTime;
