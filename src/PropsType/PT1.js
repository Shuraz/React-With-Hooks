import React,{useState, useEffect} from 'react'
import Products from './Products'
import {useFetch} from './useFetch'
const url='https://course-api.com/react-prop-types-example';

function PT1() {

   const {products} = useFetch(url);

    console.log(products);
    return (
        <div>
            <h1>Products</h1>
            {
                products.map((product)=>{
                    return (<Products key={product.id}{...product}/>)  
                })
            }
           
        </div>
    )
}

export default PT1
