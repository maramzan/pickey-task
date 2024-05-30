import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    productState: productsReducer,
    cartState: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
