import React,{useState, useEffect}from 'react'

function Test5() {
    const [state, setstate] = useState(window.innerWidth);

    const checkSize=()=>{
        setstate(window.innerWidth);
    }

    useEffect(()=>{
        console.log("use effect");
        window.addEventListener('resize', checkSize);
        // checkSize();
        return()=>{

            window.removeEventListener('resize', checkSize);
            console.log("clean up");
        }
    },[]);
    console.log("berfore render div");
    return (
        <div>
            <h1>clean up</h1>
            {console.log("render div")}
                <h2>Window</h2>
                <h3>{state} PX</h3>
        </div>
    )
}

export default Test5
