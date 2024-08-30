import { createSlice } from '@reduxjs/toolkit'

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    qualifications: []
  },
  reducers: {
    changeResults: (state, action) => {
        console.log(action.payload)
        state.qualifications = action.payload
        console.log(state.qualifications)
    },
  }
})

// Action creators are generated for each case reducer function
export const { changeResults } = searchResultsSlice.actions

export default searchResultsSlice.reducer