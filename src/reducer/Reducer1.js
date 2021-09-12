import React,{useState} from 'react'
import {data} from '../data';
import Model from './Model';
function Reducer1() {
    const [Name, setName] = useState('');
    const [People, setPeople] = useState(data);
    const [ShowModel, setShowModel] = useState(false);
  

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(Name){
              console.log(People);
        setShowModel(!ShowModel);
       setPeople([...People,{id:new Date().getTime().toString(), name:Name}]);
       setName('');
  console.log(People);
        }
        else{
            console.log(Boolean(Name));
            setShowModel(!ShowModel);
        }

    }
    const closeModel=()=>setShowModel(!ShowModel)
    return (
        <div> 
                <h1>Using Reducer</h1> 
                {ShowModel && <Model closeModel={closeModel} modelContent="I have a message"/>}
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>{ setName(e.target.value) }} value={Name}/>
                    <button type='submit'>Add it</button>
                </form>
                {
                    People.map((person)=>{
                        const {id, name}=person;
                        return(
                            <div key={id}>
                                <h3>{name}</h3>
                            </div>
                        );
                    })
                }
        </div>
    )
}

export default Reducer1
