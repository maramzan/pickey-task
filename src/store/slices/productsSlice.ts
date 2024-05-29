import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductsState } from "../../types";

const initialState: IProductsState = {
  products: [],

  // since we are not fetching data from an API, we don't need to use the loading and error states
  // loading: false,
  // error: "",
};

//since we are not fetching data from an API, we don't need to use createAsyncThunk
// the code below is an example of how to use createAsyncThunk to fetch data from an API

// const fetchProducts = createAsyncThunk('endpoint', async () => {
//   const response = await fetch('url');
//   return response.json();
// });

const productsFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },

  // incase we are fetching data from an API, we can add the extraReducers property to the createSlice function
  // and handle the loading and error states inside the slice,
  // since we are not fetching data from an API, we don't need to use the extraReducers property
  // and we are managing the loading state in the useProducts hook

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.products = action.payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchProducts.rejected, (state) => {
  //       state.error = true;
  //     });
  // },
});

export const { setProducts } = productsFilterSlice.actions;

export default productsFilterSlice.reducer;
