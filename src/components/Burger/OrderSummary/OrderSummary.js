import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = ({ingredients, purchaseCancelled, purchaseContinued, totalPrice}) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(ingredientKey => {
        return (
          <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {ingredients[ingredientKey]}
          </li>);
      });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: £{totalPrice}</strong></p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
      <Button buttonType="Success" clicked={purchaseContinued}>CONTINUE</Button>
    </Aux>
    )
};

export default orderSummary;