import React,{useState, forwardRef, useImperativeHandle} from 'react'

const Counter =forwardRef((props, ref)=> {
    useImperativeHandle(ref,()=>({handleCounter, handleSubCounter}))
    const [count, setcount] = useState(0)


    const handleCounter=()=>{
        setcount(count+1);
    }
    const handleSubCounter=()=>{
        setcount(count-1);
    }
    return (
        <div>
           
            <button onClick={handleCounter}>Counter</button>
            <h1>{count}</h1>
        </div>
    )
});
export default Counter
