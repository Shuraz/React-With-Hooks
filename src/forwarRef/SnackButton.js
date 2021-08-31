import React, {forwardRef, useImperativeHandle, useState} from 'react'

const SnackButton= forwardRef(({propsMess}, ref)=> {
    const [Toggle, setToggle] = useState(false);
   useImperativeHandle(ref,() => ({
           alterToggle(){
                setToggle(!Toggle);
           }
       }),
   )
    return (
        <div>
                <button style={{ color:"red", background:"pink" }}>
                    Button From Child</button>
                <h1>{Toggle && <span>{propsMess}</span>}</h1>
        </div>
    )
});

export default SnackButton
