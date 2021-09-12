import React,{useState} from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
//while updating state 1 value, Counter 1 is rendered unnecessarily, so memo function come to in action here, use case.
// React.memo only checks for prop changes. 
// If your function component wrapped in React.memo has a `useState`, `useReducer` or `useContext Hook` in its implementation,
//  it will still rerender when state or context change.
const AppOpti=() =>{
    const [state1, setstate1] = useState(0);
    const [state2, setstate2] = useState(0);
    
    return (
        <div>
            <h1>Optimization</h1>
            <Counter1 value={state1} onClick={()=>{setstate1(state1+1)}}/>
            <Counter2 value={state2} onClick={()=>{setstate2(state2+1)}}/>
        </div>
    )
}

export default AppOpti
