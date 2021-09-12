import React,{useRef} from 'react'
import Counter from './Counter'

const EgImperative=()=> {
    const ref = useRef();
    return (
        <div>
            <Counter ref={ref}/>
            <button onClick={()=>ref.current.handleCounter()} > Add Counter From Parent Component</button><br />
            <button onClick={()=>ref.current.handleSubCounter()}>Decrease Counter From Parent</button>
        </div>
    )
}

export default EgImperative
