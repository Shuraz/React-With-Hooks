import React,{useEffect, useRef} from 'react'

function Test8() {
    const refName = useRef('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(refName.current.value);
    }

    useEffect(()=>{
        refName.current.focus();
    })
    return (
        <div>
                <h1>Ref input</h1>
                {/* <form onSubmit={handleSubmit}> */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" ref={refName}/>
                    <button type="submit">Submit</button>
                {/* </form> */}
        </div>
    )
}

export default Test8
