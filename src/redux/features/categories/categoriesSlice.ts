import { createSlice } from "@reduxjs/toolkit";

interface State {
  categories: Array<any>;
  subCategories: Array<any>;
  baseCategories: Array<any>;
}

const initialState: State = {
  categories: [],
  subCategories: [],
  baseCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.subCategories = action.payload.subCategories;
      state.baseCategories = action.payload.baseCategories;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
