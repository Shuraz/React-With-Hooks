import React from 'react'
//forEach is slower compared to for loop, 
//this is used in special case.
function ForEachTest() {
    const products = ['apple', 'ball', 'cat', 'dog'];
    const list =[];
    products.forEach((product)=>{
        list.push(<h1>{product}</h1>)
    })
    return (
        <div>   
            {list}
        </div>
    )
}

export default ForEachTest
