import React from 'react';

function ForLoopTest() {
   const products =["apple","vall", "cat", "dong", "elsphasnt"]
    const list=[];
    for(const[i, product] of products.entries()){
        list.push(<h1>{i} : {product}</h1>)
    }   
    return (
        <div>
            {list}
        </div>
    )
}

export default ForLoopTest
