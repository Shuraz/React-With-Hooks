import React, {useRef, useState} from 'react'

function NameDisplay() {
    const [state, setstate] = useState("Name")
    const [Address, setAddress] = useState("address")
    const nameRef = useRef('');
    const addressRef = useRef('');

    const handleChange=(e)=>{
        setstate(nameRef.current.value);
    }
    const changeAddressHandle=(e)=>{
        setAddress(addressRef.current.value);
    }

    return (
        <div>
            <h1>Change Name</h1> 
            <div>{Address}</div>

            <h2>{state}</h2>
            <label htmlFor="name">Name: </label>
            <input type="text" onChange={(e)=>handleChange(e)} name="name" id="name" ref={nameRef}/><br/>
            <input type="text" name="address" ref={addressRef}/>
             <button type="button" onClick={(e)=>changeAddressHandle(e)} >Change Name</button>
            
        </div>
    )
}

export default NameDisplay
