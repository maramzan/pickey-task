import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "../../types";

const initialState: ICartState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotalItems = (cartItems: ICartItem[]) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

const calculateTotalPrice = (cartItems: ICartItem[]) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload });
      }

      state.totalItems = calculateTotalItems(state.cartItems);
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    reduceQuantity: (state, action: PayloadAction<number>) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
      }

      state.totalItems = calculateTotalItems(state.cartItems);
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalItems = calculateTotalItems(state.cartItems);
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, reduceQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
