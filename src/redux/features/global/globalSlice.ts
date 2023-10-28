import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    isBodyActive: true,
}

const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsActiveBody:(state,action) => {
            state.isBodyActive = action.payload;
        },
    }
})

export const {setIsActiveBody} = globalSlice.actions;

export default globalSlice.reducer;
