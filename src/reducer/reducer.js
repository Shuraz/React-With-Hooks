export const reducer= (state, action)=>{
    
    if(action.type==='ADD_ITEM'){
        const newPeople= [...state.people, action.payload]
        return{
            ...state,
            people:newPeople,
            isModelOpen:true,
            modelContent:'Item Added'
        }
    }
    if(action.type==='RANDOM'){
        return { ...state, isModelOpen:true, modelContent:'Please add item'

        }
    }
    if(action.type==='CLOSE_MODEL'){
        return{
            ...state, isModelOpen:false
        };
    }
    if(action.type==='DELETE_ITEM'){
        const newPeoples=state.people.filter((person)=>person.id!==action.payload)
        return{
            ...state,
            people:newPeoples,
           isModelOpen:true, modelContent: 'Item Deleted',
            
        }
    //     return(
    //    state.people.filter((person)=>{person.id!==action.payload })

    //     )
    }
    else
   return state;
   throw new Error('no matching founds')
}