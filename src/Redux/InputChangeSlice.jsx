import { createSlice } from "@reduxjs/toolkit";
export const InputChangeSlice = createSlice({
    name: "InputChange",
    initialState: {
        Searchdata:null
    }, reducers: {
        setsearchdata: (state, action) => {
            state.Searchdata=action.payload        }
    }
})
export const { setsearchdata } = InputChangeSlice.actions;
export default InputChangeSlice.reducer