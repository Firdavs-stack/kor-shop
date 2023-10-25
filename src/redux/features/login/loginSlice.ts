import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    login: '',
    password: '',
}
const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        changeLogin: (state,action) => {
            state.login = action.payload;
        },
        changePassword: (state,action) => {
            state.password = action.payload
        }
    }
})

export const {changeLogin,changePassword} = loginSlice.actions;

export default loginSlice.reducer;