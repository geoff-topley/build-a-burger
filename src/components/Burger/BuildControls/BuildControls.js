import React from 'react';
import classes from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
  { label: "salad", type: "salad" },
  { label: "cheese", type: "cheese" },
  { label: "bacon", type: "bacon" },
  { label: "meat", type: "meat" }
  ];

const buildControls = ({addIngredient, removeIngredient, disabledIngredients, currentPrice}) => (
  <div className={classes.BuildControls}>
    <p>Current Price <strong>£{currentPrice}</strong></p>
    {controls.map(control => {
      return <BuildControl
        key={control.label}
        label={control.label}
        addIngredient={()=> addIngredient(control.type)}
        removeIngredient={()=> removeIngredient(control.type)}
        disabledIngredients={disabledIngredients[control.label]}
      />
    })}
  </div>
);

export default buildControls;