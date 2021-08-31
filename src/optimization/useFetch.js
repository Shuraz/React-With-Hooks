
import { useState, useEffect, useCallback } from "react";
export function useFetch(url){

    const [Product, setProduct] = useState([]);
    
    const getProduct= useCallback( async()=>{
        const response = await fetch(url);
        const jsonData = await response.json();
        setProduct(jsonData);
    }, [url])

    useEffect(()=>{
        getProduct();
    },[url, getProduct])    

    return{ Product}

}