import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  login: "",
  password: "",
  name: "",
  surname: "",
  phone: "",
  email: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    clearLoginParams: (state, action) => {
      state.login = "";
      state.password = "";
      state.name = "";
      state.surname = "";
      state.phone = "";
      state.email = "";
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeSurname: (state, action) => {
      state.surname = action.payload;
    },
    changePhone: (state, action) => {
      state.phone = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeLogin: (state, action) => {
      state.login = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeLogin, changePassword, changeName, changeSurname, changePhone, changeEmail } =
  loginSlice.actions;

export default loginSlice.reducer;
