import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incriment } from './actions/CounterAction'

const App2 = () => {
    const count =useSelector(state=>state.CounterReducer)
    const dispatch=useDispatch()

  return (
    <div className="App">
    <div className='App-header'>
    <button onClick={()=>dispatch(incriment())}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())}>-</button>
</div>
    </div>
  )
}

export default App2
