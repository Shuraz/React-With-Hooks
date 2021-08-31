import React,{useState} from 'react'
// Element variable 
function IfElseText1() {
    const [state, setstate] = useState(true)

        let Auth;
        if(state){
            Auth = <h1>LOGIN 1</h1>
        }
        else{
            Auth = <h1>LOGOUT 1</h1>
        }


    return (
        <div>
            {Auth}
        </div>
    )
}

export default IfElseText1
