import { createSlice } from "@reduxjs/toolkit";

interface StateObject{
    id:number,
    name: string,
    description:string,
    image: string,
    price: number,
    is_active: boolean,
    category: number,
}

interface State{
    products:Array<StateObject>
}

const initialState:State ={
products:[],
};

const productsSlice = createSlice({
    name:'products',
    initialState: initialState,
    reducers: {
        getProducts(state,action){
            state.products = action.payload;
        }
    }
})

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer;