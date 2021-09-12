import React from 'react'

function Input({type, placeholder, onKeyDown}, ref) {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} onKeyDown={onKeyDown} />
        </div>
    )
}   
const forwardInput = React.forwardRef(Input);
export default forwardInput;
