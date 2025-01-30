import { createSlice } from '@reduxjs/toolkit'

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    value: "1"
  },
  reducers: {
    changeValue: (state, action) => {
        state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { changeValue } = tabsSlice.actions

export default tabsSlice.reducer