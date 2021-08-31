import React from 'react'
//https://javascript.plainenglish.io/5-use-cases-for-reduce-in-javascript-61ed243b8fef
function ReducerTest() {
    const duplicatedsArr = [1, 15, 6, 5, 7, 1, 6, 8, 9, 7];

    const removeDuplicatedArr = duplicatedsArr.reduce((accumulator, currentValue) => {
        if(!accumulator.includes(currentValue)){
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    
    console.log(removeDuplicatedArr);
    return (
        <div>
                {removeDuplicatedArr.map((item)=>{
                    return( <h2>{item}</h2>)
                   
                })}
        </div>
    )
}

export default ReducerTest
