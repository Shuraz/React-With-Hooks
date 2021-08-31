import React, {useState} from 'react'
//this is parent
//Passing state value from child to parent
function CTP() {
const [parentState, setParentState] = useState({});
const handleCallBack=(childData)=>{
    console.log(childData);
    setParentState(childData);
}
    return (
        <div>
            <h1>{parentState.nam}</h1>
            <h1>{parentState.address}</h1>
            <h1>{parentState.age}</h1>
            <Child2 parentCall={handleCallBack}/>
        </div>
    )
}

const mydata = {
    nam: "Suraj",
    address: "Granville",
    age:30
};
function Child2({parentCall}){
    const [state, setstate] = useState(mydata)
    
    const parentCall1=()=>{
        parentCall(state);
    }
   
 
    return(
        <>

        <button onClick={parentCall1}>Get Data</button>
        
        </>
    );
}
export default CTP
