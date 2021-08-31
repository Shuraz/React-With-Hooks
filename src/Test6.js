import React, {useState, useEffect} from 'react'
import Test1 from './Test1';

function Test6() {
    const [showState, setShow] = useState(false);
    return (
        <div style={{ textAlign: "center "}}>
            Toggle with short circuit

           <button onClick={()=>setShow(!showState)}>Show/Hide</button>

           {console.log(showState)}
            {showState && <Test1 name="Suraj" age="21" address="Granville"/> }
            {showState? <h1>Hero</h1>:<h1>Zero</h1>}
        </div>
    )
}

export default Test6
