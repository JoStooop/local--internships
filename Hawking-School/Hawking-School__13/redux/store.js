import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/counterSlice.js";
import filterReducer from "./reducers/filterSlice.js";
import usersReducer from "./reducers/usersSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
    users: usersReducer,
  },
})
