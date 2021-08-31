import React,{useState} from 'react'

function TerOperator() {
    const [state, setstate] = useState(true)
    return (
        <div>
            {
                state? <h1>LOGIN 2</h1>: <h1>LOGOUT 2</h1>
            }
        </div>
    )
}

export default TerOperator
