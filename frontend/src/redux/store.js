import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./url/urlSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
})