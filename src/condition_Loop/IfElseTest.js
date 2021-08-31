import React, {useState} from 'react'

function IfElseTest() {
    const [state, setstate] = useState(false)
    const CondiFunc=()=>{
        if(state){
            return(
                <h1>Condition 1</h1>
            )
        }
        else{
            return(
                <h1>Condition 2</h1>
            )
        }
    }
    return (
        <div>
            {CondiFunc()}
        </div>
    )
}

export default IfElseTest
