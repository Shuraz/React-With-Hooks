import React from 'react'
import {useFetch} from './useFetch';
const url = 'https://course-api.com/javascript-store-products';
// import {useFetch} from './useFetch';

function Ch1() {

    const {loading, data} = useFetch(url);
    console.log(data);
    return (
        <div>
        <h1>{loading?'...is Loading':'data'}</h1>
        </div>
    )
}

export default Ch1
