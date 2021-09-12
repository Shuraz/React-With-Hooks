import React,{useState} from 'react';
import {data} from './data';
import Modal from './Modal';
function UpdateJSON() {
    const [stateName, setName] = useState('');
    const [People, setPeople] = useState(data);
    const [showModel, setshowModel] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(stateName){
            setPeople([...People,{id:new Date().getTime().toString(), name:stateName}]);
            setName('');
            setshowModel(!showModel);
        }
        else{
            setshowModel(!showModel)
        }
    }
 
    return (
        <div>
            <h1>Updating Json Data</h1>
            {showModel && <Modal closeModal={()=>{setshowModel(!showModel)}} modalContent="i have message"/>}
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}} value={stateName} placeholder="type your name"/>
            <button type="submit">Add Yourself</button>
            </form>
 
            {
                People.map((item)=>{
                    return(
                        <div>
                          <p>{item.id +' '+ item.name}</p>  
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UpdateJSON
