import { configureStore } from '@reduxjs/toolkit'
import Productreducer from '../ProductsSlice'
import responsereducer from '../ApiResponse'
import inputReducer from '../InputChangeSlice'
import SignupReducer from '../SignupSlice'
export const store = configureStore({
    reducer: {
    Products: Productreducer,
    Productresponsedata: responsereducer,
    Searchdata: inputReducer,
    Signup:SignupReducer
  },
})