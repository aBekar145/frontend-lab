import React from 'react';

import classes from './Description.module.scss';

const Description = () => {
  return (
    <div className={classes.wrap}>
      <p className={classes.text}>
        Everybody should believe in something I believe I’ll have another drink.
      </p>
      <p className={classes.text}>
        “I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper
      </p>
    </div>
  );
};

export default Description;
