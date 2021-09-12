import React from 'react'
import {blogDetailsdata} from './blogDetailsData'
function Looping3(){
    let arrayData=Object.values(blogDetailsdata);
   // console.log(arrayData)
    let dataMap =new Map(Object.entries(blogDetailsdata));
   // console.log(dataMap)
    return (
        <div>
            <p>getting data from map</p>
            <h1>{dataMap.get("author")}</h1>
            <h1>{dataMap.get("address")}</h1>

            <p>getting data form array</p>
                <h1>{arrayData[0]}</h1>
        </div>
    )
}   

export default Looping3
