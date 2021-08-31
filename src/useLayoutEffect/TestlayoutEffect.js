import React,{useRef, useState, useEffect, useLayoutEffect} from 'react'

function TestlayoutEffect() {
    const [state, setstate] = useState(0)
    const refName = useRef(null);

    useEffect(()=>{
        console.log("Returning useEffect HOOK")
        refName.current.value="Suraj"
    },[])

    useLayoutEffect(()=>{
        console.log("Returning frm useLayout Effect")
        refName.current.value="Hello";
    },[])
    
        console.log(" returning main div..")
    return (
        <div>
                <h1>Use of useEffect Hook</h1>
                <h3>{state}</h3>
                <button type="button" onClick={()=>{setstate(state+1)}}>click To ADD</button><br/>
                <input type="text" ref={refName} style={{width:"200px", height:"50px"}}/>
        </div>
    )
}

export default TestlayoutEffect
