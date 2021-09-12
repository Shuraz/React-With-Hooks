import React from 'react'

const Counter2=(props)=> {
    console.log("Counter 2.....")
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.onClick}>Add Counter2</button>
            
        </div>
    )
}
function areEqual(prevProps, nextProps) {
     /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
    if (nextProps.value == prevProps.value) {
        return true;
      } else {
        return false;
      }
    }
export default React.memo(Counter2, areEqual); 
