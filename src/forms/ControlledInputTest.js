import React,{useState} from 'react'
//most cases controlled input is recomended, Here form data is handeld by react component.
function ControlledInputTest() {
    const [stateName, setstateName] = useState('')
    return (
        <div>
            <label htmlFor="name">Enter Name: </label>
            <input type="text" onChange={(e)=>{setstateName()}} name="" id="" value={stateName}/>
            <button type="submit">Conform It</button>
        </div>
    )
}

export default ControlledInputTest
