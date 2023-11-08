import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    getBasketProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getBasketProducts } = basketSlice.actions;

export default basketSlice.reducer;
