import React from 'react'

const Counter1=(props) =>{
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
    console.log("Counter 1.....")
    
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.onClick}>Add Counter1</button>
            
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

export default React.memo(Counter1, areEqual)
