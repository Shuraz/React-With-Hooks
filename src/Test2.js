import React, {useState} from 'react'
import {data} from './data';

function Test2() {
    console.log(data);
    const [stateData, setData] = useState(data);
    //const newPeopel = stateData.map((person)=>{person.id==})
    const deleteItem=(id)=>{
            const newPeople= stateData.filter((person)=>{ return person.id!==id});
            //  const newPeople = stateData.filter((person)=>person.id!==id);
            setData(newPeople);
    }
    return (
        <div>
            <h1>People listed</h1>
            {
                stateData.map((person)=>{
                    const {id,name}=person;
                    return(
                        <div>
                            <p>{id}</p>
                            <h2>{name}</h2>
                            <button onClick={()=>deleteItem(id)}>Delete</button>
                        </div>
                    );  

                })
            }   

                <button onClick={()=>setData([])}>clear all</button>
            
        </div>
    );
}

export default Test2
