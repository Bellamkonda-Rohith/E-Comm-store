import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:null
}
export const ProductSlice = createSlice({
    name: 'Products',
    initialState, reducers: {
        gettheid: (state,action) => {
            state.value = action.payload
            console.log(action.payload)
        },
        
    }
})
export const { gettheid } = ProductSlice.actions
export default ProductSlice.reducer