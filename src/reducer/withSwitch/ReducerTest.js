import React,{useState, useReducer} from 'react';

const ACTION={
    INCREMENT:'increment',
    DECREMENT:'decrement'
}
const reducer=(state, action)=>{
    switch(action.type){
        case ACTION.INCREMENT:
            return{count:state.count+1}
        case ACTION.DECREMENT:
            return{count:state.count-1}
        default:
            return state
    }
}

function ReducerApp() {
    const [state, dispatch] = useReducer(reducer, {count:0})
    // const [state, setstate] = useState(0);

    //     const handelIncrease=()=>{
    //         setstate(state+1);
    //     }
    //     const handleDecrease=()=>{
    //         setstate(state-1);
    //     }

    const handelIncrease = ()=>{
        dispatch({type:ACTION.INCREMENT})
    }
    const handleDecrease=()=>{
        dispatch({type:ACTION.DECREMENT})
    }
    return (
        <div>
            <h1>useReducer Intro</h1>
            
                <button onClick={handelIncrease}>Increase</button>
                <h1>{state.count}</h1> 
                <button onClick={handleDecrease}>Decrease</button>           

            
        </div>
    )
}

export default ReducerApp;
