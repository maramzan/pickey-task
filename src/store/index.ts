import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    productState: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
