import { configureStore } from '@reduxjs/toolkit'
import Productreducer from '../Redux/ProductsSlice'
import responsereducer from '../Redux/ApiResponse'
import inputReducer from '../Redux/InputChangeSlice'
export const store = configureStore({
    reducer: {
    Products: Productreducer,
    Productresponsedata: responsereducer,
    Searchdata:inputReducer
  },
})