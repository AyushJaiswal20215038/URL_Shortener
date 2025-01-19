import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getURL: (state,action) => {
      state.value = action.payload;
    },
    addURL: (state,action) => {
      state.value = [(action.payload),...state.value];
    },
    deleteURL: (state, action) => {
      state.value = state.value.filter(url=> url._id != action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { getURL, addURL, deleteURL } = counterSlice.actions

export default counterSlice.reducer