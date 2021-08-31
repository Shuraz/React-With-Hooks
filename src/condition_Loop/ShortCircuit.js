import React,{useState} from 'react'

function ShortCircuit() {
    const [state, setstate] = useState(true)
    return (
        <div>
            {state || <h1>LOGOUT 5</h1>}
            {state && <h1>Login 5</h1>}
            
        </div>
    )
}

export default ShortCircuit
