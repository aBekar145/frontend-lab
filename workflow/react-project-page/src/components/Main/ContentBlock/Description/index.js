import React from 'react';
import styleClasses from 'classnames';

import classes from './Description.module.scss';

const Description = () => {
  return (
    <div className={classes.container}>
      <div className={styleClasses(classes.wrap, classes.flip)}>
        <div className={classes.text}>
          Everybody should believe in something I believe I’ll have another
          drink.
        </div>
        <div className={classes.text}>
          “I’m on a whisky diet. I’ve lost three days already.” — Tommy Cooper
        </div>
        <div className={classes.text}>
          A cocktail is an alcoholic mixed drink.A cocktail is an alcoholic
          mixed drink
        </div>
      </div>
    </div>
  );
};

export default Description;
