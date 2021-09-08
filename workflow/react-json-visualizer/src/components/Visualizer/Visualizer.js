import React from "react";
import classes from './Visualizer.module.scss'

const Visualizer = (props) => {
  return (
    <div className={classes.wrap}>
        <div className={classes.sizeBlock}>
            <label className={classes.subtitle} for="text-area">Add JSON files:</label>
            <textarea id="text-area" className={classes.textareaInputField}></textarea>
        </div>

        <button className={classes.button} id="text-area-button">Build tree data</button>

        <div className={classes.sizeBlock}>
            <h3 className={classes.subtitle}>Output of finished data:</h3>
            <div className={classes.outputField} id="show-here"></div>
         </div>
    </div>
  )
}

export default Visualizer;