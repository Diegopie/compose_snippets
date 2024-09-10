import { createContext, useContext, useReducer } from "react";
import * as ACTIONS from './GlobalActions'

const GlobalContext = createContext();

const globalState = {
  cartItems: [],
  cartClosed: true,
  cartTotal: 0
};

const { ADD_CART, REMOVE_CART, TOGGLE_CART } = ACTIONS;

const calculateTotal = (cartItems) => {
  return cartItems.reduce((accumulator, product) => accumulator + product.itemPrice, 0)
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      const newCart = [...state.cartItems, action.payload];
      console.log(calculateTotal(newCart));

      return {
        ...state,
        cartItems: newCart,
        cartTotal: calculateTotal(newCart)
      };
    case REMOVE_CART: {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload
      );

      if (index > -1) {

        const cartItems = [...state.cartItems];
        cartItems.splice(index, 1);
        console.log(calculateTotal(cartItems));

        return {
          ...state,
          cartItems: cartItems,
          cartTotal: calculateTotal(cartItems)
        };
      }
      return state;
    }
    case TOGGLE_CART:
      return {
        ...state,
        cartClosed: !state.cartClosed,
      };
  }
};

const GlobalProvider = (props) => {
  console.log(props);
  const [state, dispatchGlobalState] = useReducer(reducer, globalState);

  return (
    <GlobalContext.Provider value={[state, dispatchGlobalState]} {...props} />
  )
}

export default GlobalProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}