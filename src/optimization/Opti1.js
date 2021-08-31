import React,{useState} from 'react'

function Opti1() {
    const [state, setstate] = useState(0);
    console.log('hello');
    return (
        <div>
            <h1>Optimization</h1>
            <h3>{state}</h3>
            <button onClick={()=>{setstate(state+1)}}>Add On</button>
            
        </div>
    )
}

export default Opti1;
