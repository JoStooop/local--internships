import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  sort: 'asc',
  rows: [
    {id: 1, type: "myType1", name: 'Myname1'},
    {id: 2, type: "myType2", name: 'Myname2'},
  ],
  currentCity: "Moscow",
  aloweCityies: ['Kazan', 'Vladimir', 'Moscow']
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCity: (state, action) => {
      state.currentCity = action.payload
    }
  },
})

export const {updateCity} = filterSlice.actions

export default filterSlice.reducer
