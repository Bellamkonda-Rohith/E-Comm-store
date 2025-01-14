import { createSlice } from "@reduxjs/toolkit";
export const InputChangeSlice = createSlice({
    name: "InputChange",
    initialState: {
        Searchdata:null
    }, reducers: {
        searchdata: (state, action) => {
            state.Searchdata=action.payload        }
    }
})
export const { searchdata } = InputChangeSlice.actions;
export default InputChangeSlice.reducer