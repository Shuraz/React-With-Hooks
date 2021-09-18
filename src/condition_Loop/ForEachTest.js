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
            <h1>ForEach</h1>
            {list}
            {console.log(products)}
            {/* {
               products.forEach((value, key)=>{
                return(
                    <div>
                        {key}:{value}
                    </div>
                )
               })
            } */}
        </div>
    )
}

export default ForEachTest
