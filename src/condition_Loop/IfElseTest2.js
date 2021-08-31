import React, {useState} from 'react'
//if else condition is bulk its good to make functional component like ConditionIFElse shown below.//if more condition uses switch conditon
function IfElseTest2() {
    const [state, setstate] = useState(false)
    return (
        <div>
            <CoditionIfElse isTrue={state}/>
        </div>
    )
}
 
const CoditionIfElse=({isTrue})=>{
    if(isTrue){
        return (<h1>Condition 1</h1>)
    }
    else{
        return (<h1>Conditon 2</h1>)
    }
}

export default IfElseTest2
