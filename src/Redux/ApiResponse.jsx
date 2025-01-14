import { createSlice } from "@reduxjs/toolkit";

 
export const ApiResponse = createSlice({
    name: "Productresponsedata",
    initialState: {
        data: null
    },
    reducers: {
        setdata: (state, action) => {
            state.data = action.payload
            
        }
    }
})
export const { setdata } = ApiResponse.actions;
export default ApiResponse.reducer;