import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 3,
  cheese: 2,
  meat: 4
};

class BurgerBuilder extends Component{

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false
  };


  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchasableState(updatedIngredients);
  };


  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];

    if(oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    this.updatePurchasableState(updatedIngredients);
  };


  updatePurchasableState = (ingredients) => {
    const ingredientTotal = Object.keys(ingredients)
      .map(ingredientKey => {
        return ingredients[ingredientKey];
      })
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);

    this.setState({
      purchasable: ingredientTotal > 0
    })
  };


  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  };


  closeModal = () => {
    this.setState({
      purchasing: false
    })
  };


  render() {
    const disabledIngredients = {
      ...this.state.ingredients
    };

    for(let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }

    return(
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.closeModal}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabledIngredients={disabledIngredients}
          currentPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderNow={this.purchaseHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;