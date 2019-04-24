import React from 'react';
import classes from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
  { label: "salad", type: "salad" },
  { label: "cheese", type: "cheese" },
  { label: "bacon", type: "bacon" },
  { label: "meat", type: "meat" }
  ];

const buildControls = () => (
  <div className={classes.BuildControls}>
    {controls.map(control => {
      return <BuildControl key={control.label} label={control.label}/>
    })}
  </div>
);

export default buildControls;