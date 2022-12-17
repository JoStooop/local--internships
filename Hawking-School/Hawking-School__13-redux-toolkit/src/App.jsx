import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../redux/reducers/counterSlice.js";
import {updateCity} from "../redux/reducers/filterSlice.js";
import {updateUsers} from "../redux/reducers/usersSlice.js";
import {fetchUsers} from "../redux/actions/usersAction.js";

function App() {
  const [value, setValue] = useState('')

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value)
  const filter = useSelector(state => state.filter.currentCity)
  console.log('increment', increment())

  return (
    <div className="App">
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
      </div>
      <div className="card">
        <input type="text" onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={() => dispatch(updateCity(value))}>
          updateCity is {filter}
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(fetchUsers())}>
          updateUsers
        </button>
      </div>
    </div>
  )
}

export default App
