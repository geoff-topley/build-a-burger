import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((_, i) => {
        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>;
      })
    })
    .reduce((prev, current) => {
      return prev.concat(current)
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"}/>
      {transformedIngredients}
      <BurgerIngredient type={"bread-bottom"}/>
    </div>
  )
};

export default burger;