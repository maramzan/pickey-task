import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductsState } from "../../types";

const initialState: IProductsState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to Fetch Data with status " + response.status);
    }
    const data: IProduct[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "message" in error) {
      return rejectWithValue((error as { message: string }).message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload || "Failed to Fetch Data";
          state.loading = false;
        }
      );
  },
});

export default productsSlice.reducer;
