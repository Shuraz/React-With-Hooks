import React,{useRef} from 'react'
import SnackButton from './SnackButton'

function ImperativeHandle() {
    const buttonRef = useRef(null);
    return (
        <div>
            <h1>useImperativeHandle and forwardRef</h1>

            
            <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button><br/>
     
            <SnackButton ref={buttonRef} propsMess="Message to be shown"/>
   
        </div>
    )
}

export default ImperativeHandle
