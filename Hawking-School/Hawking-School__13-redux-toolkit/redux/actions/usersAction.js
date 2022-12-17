import {updateUsers} from "../reducers/usersSlice.js";

export const fetchUsers = () => {
  return async (dispatch) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await users.json()

    dispatch(updateUsers(res))
  }
}

// export const fetchUsers2 = () => async (dispatch) => {
//   const users = await fetch('url')
//   const res = await users.json()
//
//   dispatch(updateUsers(res))
// }
