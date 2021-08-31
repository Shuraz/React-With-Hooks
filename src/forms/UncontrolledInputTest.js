import React,{useRef} from 'react'
//Form data is handled by DOM itself.
function UncontrolledInputTest() {
    const refName = useRef('')
    return (
        <div>
            <label htmlFor="name">Enter Name:</label>
            <input type="text" name="" id="" ref={refName}/>
                <button type="submit">Send It</button>
        </div>
    )
}

export default UncontrolledInputTest
