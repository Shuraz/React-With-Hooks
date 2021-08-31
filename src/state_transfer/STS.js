import React, {useState, createContext, useContext } from 'react'
//passing state value between siblings
//Using Context API
const DataCTX = createContext(null);
function STS() {
    const [stateData, setStateData] = useState({})
    return (
        //value is passed in Context provider as object ie. {}
        <DataCTX.Provider value={{stateData, setStateData}}>
        <div>
        <h1>Welcome to Parent Component</h1>
        <Child1/>
        <Child2/>
        </div>
        </DataCTX.Provider>

    )
}

const mydata = {    
    nam: "Suraj",
    address: "Granville",
    age:30
};

function Child1(){
    const {setStateData} = useContext(DataCTX);

setStateData(mydata);

    
    return(
        
        <p>Child 1 is sending data... as requested...</p>
       
   
    );
}

function Child2(){
    const {stateData} = useContext(DataCTX)
    return(
        <div>   
            <p>Child 2</p>
            <h1>{stateData.nam}</h1>
            <h1>{stateData.address}</h1>
            <h1>{stateData.age}</h1>
        </div>
    );
}
export default STS
