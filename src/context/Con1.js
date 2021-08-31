import React,{useState} from 'react'
import {data} from '../data'
///Without context API
function Con1() {
     const [people, setPeople] = useState(data)
    console.log(people);
    const deleteItem=(id)=>{
        const newPeople= people.filter((person)=>person.id!==id);
        setPeople(newPeople);
    }
    return (
        <div>
            <h1>Context API/Use Context</h1>
                <List people={people} deleteItem={deleteItem}/>
        </div>
    )
}

function List({people, deleteItem}){
    return(
            <div>
                {
                people.map((person)=>{
                        // const {id, name}=person;
                        return(
                            <SinglePerson key={person.id} {...person} deleteItem={deleteItem}/>
                        )
                    })
                }

            </div>
    );
}

function SinglePerson({id, name, deleteItem}) {
    return(
      
        <div>
            <h2>{name}</h2>
         
            <button onClick={()=>deleteItem(id)}>Delete It</button>
        </div>
    );
}

export default Con1
