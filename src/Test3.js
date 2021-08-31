import React,{useState} from 'react'

const person={
    id:2,
    name:'Suraj',
    address:'Granville'
}

function Test3() {
    const [state, setstate] = useState(person)
        console.log(person);
    return (
        <div>
          
                <h1>{state.name}</h1>
                <h2>{state.address}</h2>
                <button onClick={()=>{setstate({...state,address:'Auburn'})}}>change Address</button>

        </div>
    )
}

export default Test3
