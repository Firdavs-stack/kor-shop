import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    getToken: (state, action) => {
      (state.token = action?.payload?.data?.auth_token), (state.error = action?.payload?.error);
    },
  },
});

export const { getToken } = authSlice.actions;

export default authSlice.reducer;
