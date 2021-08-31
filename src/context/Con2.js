import React,{createContext, useState, useContext} from 'react'
import {data} from '../data'

    const PersonContext= createContext();
    
function Con2() {
     const [people, setPeople] = useState(data)


    console.log(people);
    const deleteItem=(id)=>{
        const newPeople= people.filter((person)=>person.id!==id);
        setPeople(newPeople);
    }
    return (
        <PersonContext.Provider value={{deleteItem, people}}>
            <h1>Context API/Use Context</h1>
                <List people={people}/>
        </PersonContext.Provider>
    )
}

function List(){
    const {people}=useContext(PersonContext)
    return(
            <div>
                {
                people.map((person)=>{
                        // const {id, name}=person;
                        return(
                            <SinglePerson key={person.id} {...person}/>
                        )
                    })
                }

            </div>
    );
}

function SinglePerson({id, name}) {
    const {deleteItem}=useContext(PersonContext);
    console.log(data);
    return(
      
        <div>
            <h2>{name}</h2>
         
            <button onClick={()=>deleteItem(id)}>Delete It</button>
        </div>
    );
}

export default Con2
