import React from 'react';

import classes from './AuthorizationButton.module';

const AuthorizationButton = ({ openAuthModal }) => {
    return (
        <>
            <button onClick={openAuthModal} className={classes.button}>
                Get Started
            </button>
        </>
    );
};

export default AuthorizationButton;
