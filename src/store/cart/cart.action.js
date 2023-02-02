import { createAction } from "../../utils/reducer/reducer.util.js";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);

export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const newCartItems = addCartItem(cartItems, cartItemToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemsFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const deleteItemFromCart = (cartItems, cartItemToDelete) => {
    const newCartItem = deleteCartItem(cartItems, cartItemToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItem);
}

