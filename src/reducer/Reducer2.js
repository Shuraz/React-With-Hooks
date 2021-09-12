import React,{useState, useReducer} from 'react'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {data} from '../data';
import Model from './Model';
import {reducer} from './reducer'

function Reducer2() {
    const initialState={
        people:data,
        //people:[]
        isModelOpen:false,
        modelContent:''
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [Name, setName] = useState('');
    console.log(state.people)
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(Name){
            const newPerson={id:new Date().getTime().toString(), name: Name}
            dispatch({type:'ADD_ITEM', payload:newPerson});
            setName('');
        }
        else{
            dispatch({type:'RANDOM'});
        }
    }    
        const closeModel1=()=>{
            dispatch({type:'CLOSE_MODEL'})
        }
        const handleDelete=(id)=>{
            dispatch({type:'DELETE_ITEM', payload:id})
        }

    return (
        <div>
            <h1>Reducer testing</h1>
                {state.isModelOpen && <Model closeModel={closeModel1} modelContent={state.modelContent}/>}
                    <form onSubmit={handleFormSubmit}>
                    <input type="text" onChange={(e)=>{ setName(e.target.value) }} value={Name}/>
                    <button type='submit'>Add it</button>
                </form>
                {
                state.people.map((person)=>{
                        const {id, name}=person;
                        return(
                            <div key={id}>
                                <h2>{name}</h2>
                                <button onClick={()=>{handleDelete(id)}}>Delete</button>
                            </div>
                        );
                    })
                }

        </div>
    )
}

export default Reducer2
