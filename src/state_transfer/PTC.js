import React, {useState} from 'react'
const mydata = {
    nam: "Suraj",
    address: "Granville",
    age:30
};
//This is parent component
// passing state value from parent to child
function PTC() {
    const [state, setstate] = useState(mydata);
    return (
        <div>
            <Child1 name={state.nam} address={state.address} age={state.age}/>
        </div>
    )
}

function Child1({...props}){
    const {name,address,age}= props;
    return(
        <>
        <h1>{name}</h1>
        <h2>{address}</h2>
        <h3>{age}</h3>
        </>
    );
}

export default PTC;